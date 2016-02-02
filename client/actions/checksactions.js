import { checkStatus } from "../core/statuses";

export const ADD_CHECK = "ADD_CHECK";
export const FETCH_CHECKS = "FETCH_CHECKS";
export const FETCH_CHECKS_COMPLETED = "FETCH_CHECKS_COMPLETED";
export const FETCH_CHECKS_FAILED = "FETCH_CHECKS_FAILED";

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
    dispatch({
      type: FETCH_CHECKS
    });

    return fetchChecksFromServer()
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(fetchChecksCompleted(json)))
      .catch(error => {
        dispatch(fetchChecksFailed(error.message));
      });
  };
}

export function addCheck() {
  return dispatch => {
    dispatch({
      type: ADD_CHECK
    });
  };
}
