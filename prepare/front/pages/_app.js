import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird</title>
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric) {
  console.log(metric);
}

export default wrapper.withRedux(NodeBird);
// 리덕스 스토어를 사용하기 위해서 전체 페이지의 영향을 주는
// _app 에서 store.js의 wrapper로 감싸서 NodeBird export한다.

// next에서 서버 사이드 렌더링을 위해 제공하는 메소드 4개는 redux랑 같이 쓰기보단
// next-redux-wrapper가 제공하는 걸 사용
