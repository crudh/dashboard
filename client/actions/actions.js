import {checkStatus} from "../core/statuses";

export const SET_ENVIRONMENT = "SET_ENVIRONMENT";
export const FETCH_CHECKS = "FETCH_CHECKS";
export const FETCH_CHECKS_COMPLETED = "FETCH_CHECKS_COMPLETED";
export const FETCH_CHECKS_FAILED = "FETCH_CHECKS_FAILED";

export function setEnvironment(id) {
  return {
    type: SET_ENVIRONMENT,
    payload: {
      id
    }
  };
}

function fetchChecksFromServer() {
  return fetch("http://localhost:3000/services/checks");
}

function fetchChecksCompleted(checks) {
  return {
    type: FETCH_CHECKS_COMPLETED,
    checks
  };
}

function fetchChecksFailed(error) {
  return {
    type: FETCH_CHECKS_FAILED,
    error
  };
}

export function fetchChecks() {
  return dispatch => {
    dispatch({type: FETCH_CHECKS});

    return fetchChecksFromServer()
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(fetchChecksCompleted(json)))
      .catch(error => {
        dispatch(fetchChecksFailed(error.message));
      });
  };
}
