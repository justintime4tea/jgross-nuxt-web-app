import {default as sa, HTTPError} from 'superagent';
// @ts-ignore (cant get linter to accept workspace root prefix ~)
import { isHTTPError } from '~/type-guards/superagent';
import HttpStatusCodes from 'http-status-codes';
import type { IncomingMessage, ServerResponse } from 'http'
import url from 'url';

interface Message {
  id: String,
  sender: String,
  data: String,
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const requestSuffix = typeof req.url === 'string' ? req.url : '';
    const pathParts = url.parse(requestSuffix, true);

    if (!pathParts.pathname || pathParts.pathname === '/') {
      return await getMessages(req, res);
    }

    return await getMessage(req, res);
  } catch (e) {
    if (isHTTPError(e)) {
      res.statusCode = (e as HTTPError).status;
      res.end((e as HTTPError).message);
      return;
    }
    res.statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR;
    res.end(HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR));
  }
};

export async function getMessage(req: IncomingMessage, res: ServerResponse) {
    const requestSuffix = typeof req.url === 'string' ? req.url : '';
    let messagesResponse = await sa.get(`http://192.168.56.8:8080/messages${requestSuffix}`);
    return messagesResponse.body as Message[];

}

export async function getMessages(req: IncomingMessage, res: ServerResponse) {
    const requestSuffix = typeof req.url === 'string' ? req.url : '';
    let messagesResponse = await sa.get(`http://192.168.56.8:8080/messages${requestSuffix}`);
    return messagesResponse.body as Message[];
}
