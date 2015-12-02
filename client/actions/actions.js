export const SET_ENVIRONMENT = "SET_ENVIRONMENT";

export function setEnvironment(id) {
  return {
    type: SET_ENVIRONMENT,
    payload: {
      id
    }
  };
}
