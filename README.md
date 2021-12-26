# 👉 react-nodebird

## Front-End Structure
```shell
📦front 
 ┣ 📂components
 ┃ ┣ 📂ImagesZoom
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📜AppLayout.js
 ┃ ┣ 📜CommentForm.js
 ┃ ┣ 📜FollowButton.js
 ┃ ┣ 📜FollowList.js
 ┃ ┣ 📜LoginForm.js
 ┃ ┣ 📜NicknameEditForm.js
 ┃ ┣ 📜PostCard.js
 ┃ ┣ 📜PostCardContent.js
 ┃ ┣ 📜PostForm.js
 ┃ ┣ 📜PostImages.js
 ┃ ┗ 📜UserProfile.js
 ┣ 📂hooks
 ┃ ┗ 📜useInput.js
 ┣ 📂pages
 ┃ ┣ 📂hashtag
 ┃ ┃ ┗ 📜[tag].js
 ┃ ┣ 📂post
 ┃ ┃ ┗ 📜[id].js
 ┃ ┣ 📂user
 ┃ ┃ ┗ 📜[id].js
 ┃ ┣ 📜_app.js
 ┃ ┣ 📜_document.js
 ┃ ┣ 📜about.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜profile.js
 ┃ ┗ 📜signup.js
 ┣ 📂public
 ┃ ┗ 📜favicon.ico
 ┣ 📂reducers
 ┃ ┣ 📜index.js
 ┃ ┣ 📜post.js
 ┃ ┗ 📜user.js
 ┣ 📂sagas
 ┃ ┣ 📜index.js
 ┃ ┣ 📜post.js
 ┃ ┗ 📜user.js
 ┣ 📂store
 ┃ ┗ 📜configureStore.js
 ┗ 📂util
 ┃ ┗ 📜produce.js
 ```
 
 ```
 components -> 전체 APP Layout과 다른 컴포넌트들을 저장하는 directory다.
 
 pages -> 'pages/about.js'와 같이 pages directory 안에 js 파일을 생서하게 되면 '/about' url을 통해 접근이 가능하다.
 
 _app -> 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로 페이지에 적용될 공통 사항들을 적용하는 역할을 수행한다.
      -> Component는 서버에 요청한 페이지가 된다.
      
 _document -> _app 다음에 실행되며, 공통적으로 활용할 <head>나 <body> 태그 안에 들어갈 내용들을 커스텀할 때 활용한다.
 ```
 
