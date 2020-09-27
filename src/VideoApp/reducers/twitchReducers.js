const INITIAL_STATE = {
  activeLiveTwitch: [],
  activeCategoryGames: [],
  activeFortNite: [],
  activeMineCraft: [],
  activeJustChat: [],
  activeFallGuy: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ACTION_LIVE_STREAMS":
      return { ...state, activeLiveTwitch: action.payload };
    case "ACTION_TOP_GAMES":
      return { ...state, activeCategoryGames: action.payload };
    case "ACTION_FORTNITE":
      return { ...state, activeFortNite: action.payload };
    case "ACTION_MINECRAFT":
      return { ...state, activeMineCraft: action.payload };
    case "ACTION_JUSTCHAT":
      return { ...state, activeJustChat: action.payload };
    case "ACTION_FALLGUY":
      return { ...state, activeFallGuy: action.payload };

    default:
      return state;
  }
};
