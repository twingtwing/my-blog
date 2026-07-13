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


// 5. state와 생명주기