import { ref } from 'vue';

import { acceptHMRUpdate, defineStore } from 'pinia';

import { RSocketClient, ClientOptions, JsonSerializers, MESSAGE_RSOCKET_COMPOSITE_METADATA, APPLICATION_JSON, TEXT_PLAIN, MESSAGE_RSOCKET_ROUTING, MESSAGE_RSOCKET_AUTHENTICATION, BufferEncoders, encodeCompositeMetadata, encodeRoute, encodeSimpleAuthMetadata, toBuffer } from 'rsocket-core';
import { DuplexConnection } from 'rsocket-types';

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

export const useMstore = () => {
  return useState('mstore', () => {
    return {
    }
  });
}

export const useConnect = async (m: any) => {
  const messages = m ? m : ref([]);
  if (hasStarted) {
    return Promise.resolve()
  }

  if (process.client) {
    // We use WebSocket transport when in the browser
    //@ts-ignore: doesn't like default export of rsocket?
    transport = new RSocketWebSocketClient({ url: 'ws://192.168.56.8:7000', debug: true}, BufferEncoders);
  } else if (process.server) {
    // We use TCP connection transport when in the "Node context"/server-side-rendering
    //@ts-ignore: doesn't like default export of rsocket?
    transport = new RSocketTcpClient({ host: '192.168.56.8', port: 7000, debug: true }, BufferEncoders);
  }

  hasStarted = true;
  const connectToServices = async () => {
    let data = { origin: 'Client', interaction: 'Request' };

    const setup = {
      keepAlive: 1000000,
      lifetime: 100000,
      dataMimeType: APPLICATION_JSON.toString(),
      metadataMimeType: MESSAGE_RSOCKET_COMPOSITE_METADATA.toString(),
      payload: {
        metadata: encodeCompositeMetadata([
           [TEXT_PLAIN.toString(), Buffer.from('Hello World')],
           [MESSAGE_RSOCKET_ROUTING.toString(), encodeRoute('stream')],
           [MESSAGE_RSOCKET_AUTHENTICATION.toString(), encodeSimpleAuthMetadata("user", "pass")],
        ])
      }
    };
    const client = new RSocketClient({ setup, transport });
    client.connect()
      .then((sock) => {
        sock.connectionStatus().subscribe(e => console.log(e));
        sock.requestStream({
          data: Buffer.from(JSON.stringify({ origin: 'Client', interaction: 'Request', index: 0 })),
          metadata: encodeCompositeMetadata([
            [MESSAGE_RSOCKET_ROUTING.toString(), encodeRoute('stream')],
            [
              MESSAGE_RSOCKET_AUTHENTICATION.toString(),
              encodeSimpleAuthMetadata('user', 'pass'),
            ]
          ]),
        }).subscribe({
          // eslint-disable-next-line no-console
          onComplete: () => console.log("request stream complete"),
          onError: error => console.log("Request error:", error),
          // eslint-disable-next-line no-console
          onNext: (value) => {
            messages.value.push({metadata: JSON.parse(value.metadata), data: JSON.parse(value.data.toString())});
            console.log('%s %s', value.data, value.metadata);
          },
          onSubscribe: sub => sub.request(100),
        });
      })
  };

  await connectToServices().catch(e => console.log('mstore error:', e)).then(() => console.log("complete"));
  return {
    messages
  }
}


