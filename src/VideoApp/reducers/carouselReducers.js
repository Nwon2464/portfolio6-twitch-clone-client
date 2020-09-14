// import { MOVE_RIGHT, MOVE_LEFT } from "../actions/types";

// const INITIAL_STATE = [
//   {
//     first: "264.35px",
//     second: "-25%",
//     third: "0.85",
//     fourth: "2",
//     fifth: "none",
//     width: "600px",
//     img:
//       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
//   },
//   {
//     first: "528.7px",
//     second: "-50%",
//     third: "0.7",
//     fourth: "1",
//     fifth: "none",
//     width: "600px",
//     img:
//       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
//   },
// ];
// export default (state = INITIAL_STATE, action) => {
//   console.log(state);
//   switch (action.type) {
//     case MOVE_RIGHT:
//       let XRightPosition = state.slice();
//       XRightPosition.push(XRightPosition.shift());
//       console.log(XRightPosition);
//       return { ...state, XRightPosition };
//     case MOVE_LEFT:
//       return { ...state };

//     default:
//       return state;
//   }
// };
