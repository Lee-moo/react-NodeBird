// immer를 IE에서 동작하기 위한 설정

import { enableES5, produce } from "immer";

export default (...args) => {
  enableES5();
  return produce(...args);
};
