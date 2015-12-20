import {FETCH_CHECKS} from "../actions/actions";

const initialChecks = {
  list: [
    {
      id: "test1",
      name: "Test 1",
      status: "OK"
    },
    {
      id: "test2",
      name: "Test 2",
      status: "FAIL"
    }
  ]
};

export default function checks(state = initialChecks, action) {
  switch(action.type) {
    case FETCH_CHECKS:
    default:
      return state;
  }
}
