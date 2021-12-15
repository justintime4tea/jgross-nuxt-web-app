import { HTTPError } from "superagent";

function isHTTPError(x: any): x is HTTPError  {
  return typeof !!x &&
    typeof x === 'object' &&
    'status' in x &&
    typeof x.status === 'number' &&
    (x.status >= 400 && x.status <= 600);
}

export { isHTTPError }
