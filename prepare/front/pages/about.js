import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { END } from "redux-saga";

import { Avatar, Card } from "antd";
import AppLayout from "../components/AppLayout";
import wrapper from "../store/configureStore";
import { LOAD_USER_REQUEST } from "../reducers/user";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>ZeroCho | NodeBird</title>
      </Head>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              짹짹
              <br />
              {userInfo.Posts}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {userInfo.Followers}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
            description="노드버드 매니아"
          />
        </Card>
      ) : null}
    </AppLayout>
  );
};
// what if the getStaticProps
// 남의 정보를 가져올 때는 조금 더 신중히 처리해야 한다. post id라던가 followers, followings의 id 값 노출도
// 보안 위협이 될 수 있다.

// getStaticProps vs getServerSiddProps
// 언제 접속해도 데이터가 바뀔 일이 없으면 getStaticProps (블로그 게시글 등) (적용하기 까다롭다.) (나중에 next에서 빌드르 해줄 때 정적인 html 파일로 뽑아준다.)
// 성능에는 좋지만 미리 만들어 놓을만한 것들이 적다.

// 접속할 때마다 접속한 상황에 따라서 데이터가 바뀌면 getServerSideProps
// getServerSideProps는 방문할 떄마다 프론트에서 백엔드 서버로 처리한다.

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  console.log("getStaticProps");
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise(); // 공식문서 찾아보기
});

export default Profile;
