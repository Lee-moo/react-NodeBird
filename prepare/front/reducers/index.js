import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// (이전상태, 액션) => 다음상태
// 리듀서를 나누기 위해서 redux의 combineReducers를 import 해서
// 각 모듈로 나눈 reducer들을 rootReducer로 통합
// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         console.log("HYDRATE", action);
//         return { ...state, ...action.payload };
//       default:
//         return state;
//     }
//   },
//   user,
//   post,
// });

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

// post, user에서는 dummyData를 위해서 faker와 shortId를 사용
// 리액트, 리덕스의 중요한 규칙인 불변성을 지키기 위해서는 push나 unshift와 같은 함수들을 사용하지 못하는데
// 그런 리액트, 리덕스의 불변성을 지키지 않고 사용할 수 있는 immer 사용
