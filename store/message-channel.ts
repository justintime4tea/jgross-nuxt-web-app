import { ref } from 'vue';

import { acceptHMRUpdate, defineStore } from 'pinia';
import { Flowable } from 'rsocket-flowable';
import { RSocketClient, ClientOptions, JsonSerializers, MESSAGE_RSOCKET_COMPOSITE_METADATA, APPLICATION_JSON, TEXT_PLAIN, MESSAGE_RSOCKET_ROUTING, MESSAGE_RSOCKET_AUTHENTICATION, BufferEncoders, encodeCompositeMetadata, encodeRoute, encodeSimpleAuthMetadata, toBuffer } from 'rsocket-core';
import { DuplexConnection, ISubscription, ReactiveSocket } from 'rsocket-types';

//@ts-ignore: doesn't like default export of rsocket?
import RSocketWebSocketClient from 'rsocket-websocket-client';
//@ts-ignore: doesn't like default export of rsocket?
//const RSocketWebSocketClient: RSWS = RSWS.default;
//@ts-ignore: doesn't like default export of rsocket?
import RSTCP from 'rsocket-tcp-client';
//@ts-ignore: doesn't like default export of rsocket?
const RSocketTcpClient: RSTCP = RSTCP.default;

let transport: DuplexConnection;
let hasStarted = false;

import { URL } from 'url';

export interface MessageChannelStore {
  send: (message: String) => void;
  addMessage: (message: String) => void;
  messages: String[];
  connect: () => Promise<void>;
}

export interface MessageChannelStoreInternal extends MessageChannelStore {
  msgs: any[];
  bufferPosition: number;
  rsock: ReactiveSocket<unknown, Buffer>;
  messageSubscription: ISubscription;
}

export const useMessageChannelStore = defineStore({
  id: 'message-channel-store',
  state: () => ({
    msgs: [],
    bufferPosition: 0,
    rsock: null,
    messageSubscription: null
  } as any as MessageChannelStoreInternal),
  getters: {
    messages(state) {
      return state.msgs;
    }
  },
  actions: {
    async connect() {
      if (hasStarted) {
        return Promise.resolve()
      }

      if (process.client) {
        // We use WebSocket transport when in the browser
        //@ts-ignore: doesn't like default export of rsocket?
        transport = new RSocketWebSocketClient({ url: 'ws://192.168.0.147:7000', debug: true}, BufferEncoders);
      } else if (process.server) {
        // We use TCP connection transport when in the "Node context"/server-side-rendering
        //@ts-ignore: doesn't like default export of rsocket?
        transport = new RSocketTcpClient({ host: '192.168.0.147', port: 7000, debug: true }, BufferEncoders);
      }

      hasStarted = true;
      const connectToServices = async () => {
        const setup = {
          keepAlive: 60000,
          lifetime: 180000,
          dataMimeType: APPLICATION_JSON.toString(),
          metadataMimeType: MESSAGE_RSOCKET_COMPOSITE_METADATA.toString(),
          payload: {
            metadata: encodeCompositeMetadata([
               [MESSAGE_RSOCKET_ROUTING.toString(), encodeRoute('message-stream')],
               [MESSAGE_RSOCKET_AUTHENTICATION.toString(), encodeSimpleAuthMetadata('user', 'pass')],
            ])
          }
        };
        const client = new RSocketClient({ setup, transport });
        client.connect()
          .then((sock) => {
            this.rsock = sock;
            sock.connectionStatus().subscribe(e => console.log(`MessageChannelStore status changed to - ${e.kind}`));
            this.requestMessages(0);
           })
      };

      await connectToServices().catch(e => console.log('MessageChannelStore error:', e)).then(() => console.log('MessageChannelStore connected'));
    },
    requestMessages(offset = 0) {
      if (this.rsock) {
        this.rsock.requestStream({
          data: Buffer.from(JSON.stringify({ userId: 'user-id', message: 'some message', index: 0 })),
          metadata: encodeCompositeMetadata([
            [MESSAGE_RSOCKET_ROUTING.toString(), encodeRoute('message-stream')],
            [
              MESSAGE_RSOCKET_AUTHENTICATION.toString(),
              encodeSimpleAuthMetadata('user', 'pass'),
            ]
          ])
        }).subscribe(this.createMessageStreamHandler());
      }
    },
    addMessage(message: String) {
      if (this.msgs.length >= 25) {
        this.msgs.shift();
      }
      // this.msgs[this.bufferPosition] = message;
        this.msgs.push(message);
      // this.bufferPosition = (this.bufferPosition + 1) % 12;
    },
    send(message: String) {
      this.rsock.requestResponse({
        data: Buffer.from(JSON.stringify({ message })),
        metadata: encodeCompositeMetadata([
          [MESSAGE_RSOCKET_ROUTING.toString(), encodeRoute('send-message')],
          [
            MESSAGE_RSOCKET_AUTHENTICATION.toString(),
            encodeSimpleAuthMetadata('user', 'pass'),
          ]
        ])
      }).subscribe({
        onError: error => console.log('request response error:', error),
        // eslint-disable-next-line no-console
        onComplete: (value) => {
          console.log("Received response:", value)
          console.log('Requesting next messages');
        },
        onSubscribe: () => {},
      });

    },
    createMessageStreamHandler() {
      return {
          // eslint-disable-next-line no-console
          onComplete: () => {
            // this.requestMessages();
            console.log("finished requesting messages")
          },
          onError: error => console.log('request channel error:', error),
          // eslint-disable-next-line no-console
          onNext: (value) => {
            const message = {metadata: JSON.parse(value.metadata), data: JSON.parse(value.data.toString())};
            this.addMessage(message);
          },
          onSubscribe: sub => sub.request(MAX_REQUEST_COUNT)
        }
    }
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMessageChannelStore, import.meta.hot))
}

const MAX_REQUEST_COUNT: number = 0x7fffffff;
