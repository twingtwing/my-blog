import React, { StrictMode, createElement } from 'react'
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

// 5. state와 생명주기  

// Clock이 타이머를 설정하고 매초 UI를 업데이트하지만, 이는 타이머를 설정해서 가능한 것. 
// 그러나, 스스로 업뎃하도로 해야함
// const root = ReactDOM.createRoot(document.getElementById('root'))

// function Clock(props){
//   return (
//     <div>
//       <h1>Hi</h1>
//       <h2>Time : {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// function tick(){
//   root.render(<Clock date={new Date()}/>)
// }

// setInterval(tick, 1000)

// 함수에서 클래스로 변환하기
// React.Component 를 통해 함수 컴포넌트를 클래스로 변환 가능

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hi</h1>
//         <h2>Time : {this.props.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }

/* 
  render 메서드는 업데이트가 발생할때마다 호출되지만, 같은 DOM노드로  <Clock />을 렌더링하는 경우 Clock 클래스의 단일 인스턴스만 사용됨
  즉, 화면이 계속 바뀌어도 React는 그 컴포넌트를 부수고 다시 새로 만드는것이 아니라 기ㅏ존에 만들어둔것을 재사용한다는 의미
  React가 컴포넌트 인스턴스(실체)를 파괴하지 않고 하나만 계속 유지해주기 때문에, 우리가 state와 생명주기 기능 같은 것을 마음놓고 사용할 수 있다
*/

// 클래스에 로컬 state 추가
/* <Clock />가 root.render()로 전달되었을 때 React는 Clock 컴포넌트의 constructor를 호출합니다. Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화합니다. 나중에 이 state를 업데이트할 것입니다.
React는 Clock 컴포넌트의 render() 메서드를 호출합니다. 이를 통해 React는 화면에 표시되어야 할 내용을 알게 됩니다. 그 다음 React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트합니다.
Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청합니다.
매초 브라우저가 tick() 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체를 호출하면서 UI 업데이트를 진행합니다. setState() 호출 덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시 호출합니다. 이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 업데이트된 시각을 포함합니다. React는 이에 따라 DOM을 업데이트합니다.
Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출합니다 */
class Clock extends React.Component {
  // 클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야함
  constructor(props) { 
    super(props);
    this.state = {date: new Date()};
  }

  // Clock이 처음 DOM에 렌더링될때마다 타이머 설정. 이를 REact에서는 마운팅이라고 함
  // 또한 생성 DOM이 삭제될때마다 타이머 해제. 이를 언마운팅이라고함
  // 이러한 메서드들은 생명주기 메서드라고 함
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  // 매초 작동하는 함수
  tick() {
    this.setState({ // 컴포넌트 로컬 state를 업뎃하기위해 사용
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <h2>Time : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Clock />)

// state 올바른 사용
// 직접 수정 X ex, this.state.comment = '' < - x
// this.setState({comment:''}) < - 0

// state 업뎃은 비동기적일수 있음
// React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있음
// this.props와 this.state가 비동기적으로 업데이트될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안 됨
// this.로 가져오지 말고, 직접 인자로 받아와야함
/* // Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

 */

// state 업뎃은 병합가능
// setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합

/* 
 constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

  // this.state을 통해 변수를 독립적으로 업뎃함
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
    
  그러나 병합은 얕게 이루어지기 때문에 this.setState({comments})는 
 (setState 호출 시 전달한 객체와 기존 상태 객체를 얕게 병합(shallow merge) 
  즉, 변경하려는 속성만 업데이트하고 나머지는 그대로 유지)
  this.state.posts에 영향을 주진 않지만 this.state.comments는 완전히 대체

    // 1. 처음 상태
  this.state = { posts: [옛날글], comments: [옛날댓글] };

  // 2. fetchPosts() 완료! ➔ posts만 바꿈
  this.setState({ posts: [새글] });
  // ➔ 결과: { posts: [새글], comments: [옛날댓글] } (comments는 영향 없음!)

  // 3. fetchComments() 완료! ➔ comments만 바꿈
  this.setState({ comments: [새댓글] });
  // ➔ 결과: { posts: [새글], comments: [새댓글] } (posts는 영향 없음!)
*/

// 데이터는 아래로 흐른다
//  “하향식(top-down)” 또는 “단방향식” 데이터 흐름 
/* 
<FormattedDate date={this.state.date} />
1. 자식은 출처를 알지 못함 즉 date가 어디서 왔는지 모름 또한 알필요도 없음
2. 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 자신의 “아래”에 있는 컴포넌트에만 영향을 마참
3. 그렇기 때문에 컴포넌트간의ㅏ 완전한 독립성을 가짐 서로 전혀 간섭하지 않음
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
  을 보면 Clock들간은 서로 영향을 주지 않음
*/

// 6. 이벤트 처리하기

// React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사
/* 
  차이점
  - React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용합니다.
  - JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달

  <button onClick={activateLasers}> // activateLasers() Html 버전
    Activate Lasers
  </button>
*/

// 또다른 차이ㅏ점 React에서는 false를 반환해도 기본 동작을 방지할 수 없음 preventDefault 명시적 호출 필요

/* 
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
html은 return false 하지만 

function Form() {
  function handleSubmit(e) {
    e.preventDefault(); // preventDefault 명시적 호출 필요
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
*/
// 리스너 이벤트
// React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없습니다. 
// // 대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 됩니다.

/* 
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 리스너를 제공
    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { // 리스너
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>//  JSX 콜백 안에서 this의 의미에 대해 주의
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
*/

//  JSX 콜백 안에서 this의 의미에 대해 주의
/* 
   JSX 콜백 안에서 this를 하였는데 이 this가 누구인지 모르기 때문에 undefined가 뜬다
   그렇기 대뭉네 undefined문제를 해결하기위ㅏ해 총 3가지 방법이 있다

   1. 생성자 강제 연결 : .bind()
   constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // "handleClick 안의 this는 무조건 이 Toggle 클래스 자신이다!"라고 딱 못 박아둠
    this.handleClick = this.handleClick.bind(this);
  }

  2. 클래스 필드 문법 사용
  //  이 문법은 *실험적인* 문법
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  3. render 안에서 화살표로 감싸기ㅏ (비추)
  이 문법은 클래스가 랜더린될때마다 다른 콜백이 생성된다. 
  문제는 없지만, 하위ㅏ 컴포넌트에 props로서 전달될때 그 컴포넌트들이 추가로 다시 렌더링하는 성능문제 발생
  즉, 부모가 매번 다른 props를 줘서 안바껴도 될 자식이 바뀌는 문제 발생
  그래ㅑ서 되도록 1,2번을 권장
  <button onClick={() => this.handleClick()}>
*/

// 이벤트 핸들러에 인자 전달

// 루트 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는것이 일반적
// 이때 화살표 함수 혹은 bind를 사용

/* 
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

두 경우 모두 React 이벤트를 나타내는 e 인자가 ID 뒤에 두 번째 인자로 전달ㅁ
화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우 추가 인자가 자동으로 전달

this.deleteRow.bind(this, id) 에서 괄호 안의 값들은 역할
첫 번째 this: 이건 함수에 전달되는 데이터가 아니라, "함수 내부의 this를 누구로 설정할 것인가"를 결정하는 자바스크립트의 규칙입니다. (인자로 전달되지 않고 소비됨!)
두 번째 id: 이것부터가 함수로 들어가는 진짜 첫 번째 데이터(인자 1)가 됩니다!'
그래ㅑ서 함수에서는 2번째 인자가 들어옴 . 명시하지 않아도 e는 자동으로 들어옴
deleteRow(id, e) {
  // 첫 번째 인자: id (값: 3)
  // 두 번째 인자: e (클릭 이벤트 정보)
}
*/

// 7. 조건부 렌더링

// 8. 리스트와 key