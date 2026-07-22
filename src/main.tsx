import { StrictMode, createElement } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// Test.tsx로 변경하기

/*
1.createRoot는 React 18에서 도입된 새로운 렌더링 방식을 시작하는 함수입니다.
기존의 ReactDOM.render()를 대체하며, React 애플리케이션의 최상위(root) 요소를 생성하고 렌더링을 담당합니다.
!가 붙은 이유는 TypeScript에서 null이 될 수 있는 값을 단언(assert)하는 연산자입니다.
*/
// StrictMode는 React 애플리케이션에서 사용되는 컴포넌트에 대해 추가적인 검사를 수행하여 문제를 조기에 발견할 수 있도록 도와줍니다. 
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// ) 

// 2.리액트 jsx(tsx) 문법
// function formatName(user){
//   return user.firstName + '-' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// //jsx에 표현식 포함하기
// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.createRoot(document.getElementById('root')!).render(element);

// createElement를 사용하여 JSX를 React.createElement로 변환
// 3. 엘리먼트 랜더링
// 랜더링이란? ????
/*
  엘리먼트는 React에서 화면에 표시되는 가장 작은 단위입니다.
  React.createElement()는 JSX를 사용하지 않고 React 엘리먼트를 생성하는 방법입니다.
  첫 번째 인자는 HTML 태그 이름 또는 React 컴포넌트, 두 번째 인자는 속성(props), 세 번째 인자는 자식 요소(children)입니다.
  브라우저 DOM 엘리먼트와 달리 REact엘리먼튼ㄴ 일반객체이며 쉽게 생성 가능
*/
// const element2 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// 엘리먼트와 컨포넌트는 다른 의미

// const rootDom = ReactDOM.createRoot(document.getElementById('root')!);  // root dom node
// const element= <h1>Hello, world!</h1> // 엘리먼트

// // DOM에 엘리먼트 렌더링하기
// rootDom.render(element);

// 랜더링된 엘리먼트 업뎃하기
/*
  react 엘리먼트는 불변객체
  엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할수 없다.
  렌더링한 시점의 ui 를 보여줌
  엘리먼트를 업데이트하려면 새로운 엘리먼트를 생성하고 ReactDOM.render()를 다시 호출해야 한다.
  이때, React는 이전 엘리먼트와 새로운 엘리먼트를 비교하여 변경된 부분만 실제 DOM에 반영한다.
  브라우저에서 html을 열게되면 DOM을 만들게 된다. html코드의 특정 부분이 변경되면 전체 DOM을 새롭게 만들게되어 매우 비효율 적이다. 
   이를 개선하기위해 리액트는 가상 DOM을 만들어 진짜 DOM과 비교한다. 그리고 변경된 부분만 진짜 DOM에 반영하는 방식으로 작업을 수행한다.
  ReactDOM.render()는 이전 엘리먼트와 새로운 엘리먼트를 비교하여 변경된 부분만 실제 DOM에 반영한다.
  가상 DOM은 메모리 상에 존재하는 가벼운 DOM으로, 실제 DOM과 동일한 구조를 가지지만 브라우저에 렌더링되지 않는다.
  React는 가상 DOM을 사용하여 효율적으로 UI를 업데이트하고 렌더링한다.
  ReactDOM.render()는 이전 엘리먼트와 새로운 엘리먼트를 비교하여 변경된 부분만 실제 DOM에 반영한다.
  가상 DOM은 메모리 상에 존재하는 가벼운 DOM으로, 실제 DOM과 동일한 구조를 가지지만 브라우저에 렌더링되지 않는다.
  React는 가상 DOM을 사용하여 효율적으로 UI를 업데이트하고 렌더링한다.
*/

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// // setInterval 이용해서  1초마다 tick 함수 호출
// setInterval(tick, 1000);

// 4. 컴포넌트와 props
/* 
    component는 UI를 독립적이고 재사용 가능한 조각으로 나누는 방법입니다.
    컴포넌트를 정의하는 가장 간단한 방법은 함수형 컴포넌트를 사용하는 것입니다.
*/
// function Welcome(props: { name: string }) {
//   return <h1>Hello, {props.name}</h1>;
// }

// 컴포넌트 렌더링
/* 
  이전까지는 Dom 태그만을 이용해 React 엘리먼트를 만들었지만, ex const element = <div />;
  React 엘리먼트는 사용자 저의 컴포넌트로도 나타낼수 있다 ex const element = <Welcome name="Sara" />;
  react가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당컴포넌트에 단일객체로 전달한다
  이 객체를 props라고 부른다. props는 읽기 전용이며, 컴포넌트는 전달받은 props를 변경할 수 없다.
  여기서 props는 <Welcome name="Sara" />에서 name="Sara" 부분을 의미
  즉, 하나의 Welcome 컴포넌트를 만들고, name이라는 Prop을 전달하여 각기 다른 결과를 렌더링할 수 있습니다. 이를 통해 코드의 재사용성이 획기적으로 향상
*/
// 렌더링 예시
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<Welcome name="Sara" />);

// 컴포넌트 합성
/* 
    컴포넌트는 자신의 출력에 다른 컴포넌트를 참도 가능
    이는 모든 세부단계에서 동일한 추상 컴포넌트 사용할수있다
    React 앱에서는 버튼, 폼, 다이얼로그, 화면 등의 모든 것들이 흔히 컴포넌트로 표현
*/
// function Welcome(props: { name: String}) {
//   return <h1>Hello, {props.name}</h1>
// }

// // App 컴포넌트에 Welcome 컴포넌트를 여러 번 사용하여 다양한 이름을 전달하고, 각기 다른 인사말을 렌더링합니다.
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Tom" />
//       <Welcome name="Wine" />
//       <Welcome name="Blue" />
//     </div>
//   )
// }

// // document.getElementById('root')!에 !붙이는 이유?
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<App/>)

// 컴포넌트 추출

// Comment 컴포넌트를 보면 구성요소들이 모두 중첩 구조로 이루어져 있어서 변경하기 어렵다. 
// 각 구성요소를 개별적으로 재사용하기도 힘들다. 이 컴포넌트에서 몇가지 컴포넌트를 추출하겠다.
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user = {props.author} />
//       {/* <div className="UserInfo">
//         < Avatar props = {props.author} /> 
//           props가 아니라 props.author를 전달해야함. props는 읽기 전용이므로 props.author를 전달해야함
//           Avatar 컴포넌트 추출
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           /> 
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div> */}
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   )
// }

// // Avatar 컴포넌트 추출
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//           src={props.user.avatarUrl} // Avatar가 렌더링된다는거를 알 필요 없기 때문에 일반화된 user을 대신 사용
//           alt={props.user.name}
//         />
//   )
// }

// // UserInfo 컴포넌트 추출
// function UserInfo(props){ 
//   return (
//     <div className="UserInfo">
//       < Avatar props = {props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   )
// }

// // props는 읽기 전용

// /* 
//   함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트 자체 props 수정 불가
//   다음 함수의 경우 순수 함수라고 한다. 입력값을 수정하지 앖고 항상 동일한 입력값에 대해 동일한 출력값을 반환하는 함수이기 때문에
// */
// function sum(a, b) {
//   return a + b;
// }

// // 반면 이 함수는 순수 함수가 아니다. 입력값을 수정하고, 동일한 입력값에 대해 다른 출력값을 반환할 수 있기 때문에
// function withdraw(account, amount) {
//   account.total -= amount;
// }

/* 
  여기서 React는 중요한 규칙이 있다 
  모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다. 
  즉, 컴포넌트는 전달받은 props를 수정하지 않고, 동일한 props에 대해 항상 동일한 UI를 렌더링해야 한다.
  물론 애플리케이션UI는 동적이며 시간에 따라 변한다. 
  이때 React는 컴포넌트의 상태(state)를 사용하여 UI를 동적으로 업데이트한다.
  React 컴포넌트는 state를 통해 위 규칙을 위반하지 않고, 사용자 액션, 네트워크 응답 및 다른 요소에 
  대한 응답으로 시간에 따라 자신의 값을 변경할 수 있다.
*/

// 5. state와 생명주기 - 목


// 6. 이벤트 처리하기 - 목


// 7. 조건부 렌더링 - 목

// 9 ~ 12 토

// 정리 일