import {FETCH_CHECKS, FETCH_CHECKS_COMPLETED, FETCH_CHECKS_FAILED} from "../actions/checksactions";
import {INIT, LOADING, FAIL, OK} from "../core/statuses";

const initialChecks = {
  list: [
  ],
  status: INIT
};

export default function checks(state = initialChecks, action) {
  switch (action.type) {
    case FETCH_CHECKS:
      return Object.assign({}, state, {
        status: LOADING,
        error: null
      });
    case FETCH_CHECKS_COMPLETED:
      return Object.assign({}, state, {
        list: action.checks,
        status: OK,
        error: null
      });
    case FETCH_CHECKS_FAILED:
      return Object.assign({}, state, {
        status: FAIL,
        error: action.error
      });
    default:
      return state;
  }
}
