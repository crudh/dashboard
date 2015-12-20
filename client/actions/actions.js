export const SET_ENVIRONMENT = "SET_ENVIRONMENT";
export const FETCH_CHECKS = "FETCH_CHECKS";

export function setEnvironment(id) {
  return {
    type: SET_ENVIRONMENT,
    payload: {
      id
    }
  };
}

export function fetchChecks() {
  return {
    type: FETCH_CHECKS
  };
}
