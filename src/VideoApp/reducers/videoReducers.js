import _ from "lodash";
import { FETCH_VIDEOS } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, ..._.mapKeys(action.payload, "albumId") };

    default:
      return state;
  }
};
