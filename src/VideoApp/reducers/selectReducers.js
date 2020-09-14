import { SELECT_VIDEO } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return { ...action.payload };

    default:
      return state;
  }
};
