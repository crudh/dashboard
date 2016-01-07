export const INIT = "init";
export const LOADING = "loading";
export const FAIL = "fail";
export const OK = "ok";

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
