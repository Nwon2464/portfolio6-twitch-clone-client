import { SHOW_MODAL, CLOSE_MODAL } from "../actions/types";

const INITIAL_STATE = {
  showModal: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};
