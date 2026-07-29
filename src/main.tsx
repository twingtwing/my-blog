import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// 7. 조건부 렌더링

/* 
  React에서 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있다. 그렇게 하면 애플리케이션의 상태에 따라서 
  컴포넌트 중 몇개만을 렌더링할 수 있다. React에서 조건부 렌더링은js에서의 조건처리와 같이 동작한다.
  예를들어 if나 조건부 연산자와 같은 js 연산자를 현재 상태를 나타내는 엘리먼트를 만드는데 사용가능하다.
  그러면 리엑트는 현재 상태에 맞게 ui를 업뎃할것이다,
*/

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// // 사용자 로그인 상태에 맞게 위 컴포넌트 중 하나를 보여주는 컴포넌트를 만든다.
// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// // isLoggedIn props에따라 다른 인사말을 렌더링한다.
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<Greeting isLoggedIn={false} />);

// 엘리먼트 변수

/* 
  엘리먼트를 저장하기 위해 변수를 사용할 수 있다. 출력의 다른 부분은 변하지 않은 채로 컴포넌트의 일부를 
  조건부로 렌더링할 수 있다. 
*/
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// // 사용자 로그인 상태에 맞게 위 컴포넌트 중 하나를 보여주는 컴포넌트를 만든다.
// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props){
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// }

// function LogoutButton(props){
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }

// // 유상태 컴포넌트 -> state를 사용해야하므로 class 컴포넌트를 사용한다.
// class LoginControl extends React.Component {
//   constructor(props){
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick(){
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick(){
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn){
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     }
//     else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {button}
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<LoginControl />);

// 논리 && 연산자로 If를 인라인으로 표현
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hi!</h1>
//       {
//         unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   )
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<Mailbox unreadMessages={messages}/>);

/* 
  js에서 true && expression은 항상 expression으로 평가되고 
  false && expression은 항상 false로 평가 된다.
  따라서 && 뒤의 엘리먼트는 조건이 true일때 출력된다. 조건이 false라면 그냥 넘어가고 아무것도 출력되지 않는다.

  falsy 표현식을 반환하면 여전히 && 뒤에 표현식은 건너 뛰지만 falsy 표현식이 반환되는것을
  주의 해야 한다.
*/
// const count = 0;
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//   <div>
//     {count && <h1>Messages: count</h1>}
//     {count > 0 && <h1>Messages: count</h1>}
//   </div>
// );
/* 
  여기서 js는 true/false 밖에 없다. 
  다만 이 boolean 타입의 값이 와야 하는 자리에 다른 타입의 값이 와도 true 또는 false로 취급 되어 
  에러가 나지 않는 경우가 있는데, 이러한 값들을 truthy 또는 falsy 값이라고 한다. 
  false, null, undefined, 0, -0, 0n, NaN, ''
  falsy 값은 위의 8가지가 전부이며, 이를 제외한 다른 모든 값들은 truthy 값이다.

  && 연산자에서 첫 번째 객체가 falsy 값이라면, 해당 객체를 반환한다.
  그렇기 때문에 위의 값은 <div>0</div>이 render 메서드에서 반환된다.
*/

// 조건부 연산자로 if-else 구문 인라인으로 표현
// 엘리먼트를 조건부로 렌더링하는 다른 방법은 조건부 연산자인 condition ? true: false를 사용하는 것이다.
// function LoginButton(props){
//   return (
//     <button onClick={props.onClick}>
//       login
//     </button>
//   )
// }

// function LogoutButton(props){
//   return (
//     <button onClick={props.onClick}>
//       logout
//     </button>
//   )
// }

// class LogInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isLoggedIn:false}
//   }

//   handleLoginClick = () => {
//     this.setState({isLoggedIn:true})
//   }

//   handleLogoutClick = () => {
//     this.setState({isLoggedIn:false})
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         {
//           isLoggedIn
//           ? <LogoutButton onClick={this.handleLogoutClick} />
//           : <LoginButton onClick={this.handleLoginClick} />
//         }
//       </div>
//     )
//   }
// }

// js 와 마찬가지로 가독성이 좋은 방식을 선택하면 된다. 또한 조건이 복잡하다면, 컴포넌트 분리하기 좋은 때일수도 있음을 기억하면된다.

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<LogInfo />);

// 컴포넌트가 렌더링하는것을 억제

/* 
  가끔 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때가 있을 수 있다. 
  이때는 렌더링 결과를 출력하느 ㄴ대신 null을 반환하면 해결가능하다.
*/

// function WarningBanner(props){
//   if(!props.warn) return null;

//   return (
//     <div className='warning'>
//       Warning!
//     </div>
//   )
// }

// class Page extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning : !state.showWarning
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<Page />);

/* 
  WarningBanner 의 warn에 false 값이 들어가서 null이 반환하면서 렌더링 자체가 되지 않는다.

  컴포넌트의 render 메서드로부터 null을 반환하는 것은 생명주기 메서드 호출에 영향을 주지 않는다.
  그 예로 componentDidUpdate는 계속해서 호출되게 된다...?

  React는 컴포넌트의 props가 바뀌어 render()까지 정상 실행을 마치면 componentDidUpdate를 호출한다.
  따라서 화면에 글자가 떴든, null이 떴든 관계없이 생명주기 메서드는 정상 작동한다.
  null은 그저 화면을 보여주지 말라고 할뿐 알려준것 즉, render() 과정 자체는 정상적으로 실행되었고, 그 결과물이 null이었던 것
*/

// 8. 리스트와 key

/* 
  먼저 js에서는 리스트를 어떻게 변환하는지 확인하겠다
  map()함수를 이용하여 numbers 배열의 값을 두배로 만든 후 map()에서 반환하는 새 배열을 doubled 변수에 할당하고 로그를 확인하는 코드이다.
*/

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// React에서 배열을 엘리먼트 리스트로 만드는 방식은 이와 거의 동일하다.

// 다수의 컴포넌트 렌더링

/* 
  엘리먼트 모음을 만들고 중괄호{}을 이용하여 jsx에 포함시킬수있다.
  js의ㅏ map 함수르 ㄹ 사용하여 반복실행하면서 각 항목에 대해  li 엘리먼트를 반환하고 엘리먼트 배열의 결과를 
  listItem에 저장할수있다.
*/

const listItem = numbers.map((number)=> 
  <li>{number}</li>
) 

// 그러면 ul엘리먼트 안에 전체 listItem 배열을 포함할 수 있다.
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<ul>{listItem}</ul>);

// 기본 리스트 컴포넌트

/* 
  일반적으로 컴포넌트 안에서 리스트를 렌더링한다. 이전 예시를 numbers 배열을 받아서 순서 없는 엘리먼트 리스트를 출력하는 컴포넌트로 리팩토링할 수있다. 
*/

// function NumberList(props){
//   const numbers = props.numbers;
//   const numberList = numbers.map(num => 
//     <li>{num}</li>
//   );
//   return (
//     <div>
//       <h1>
//         List
//       </h1>
//       <ul>{numberList}</ul>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<NumberList numbers={numbers} />);

/* 
  이 코드를 실행하면 리스트의 각 항목에 key를 넣어야하는 경고가 표시된다.
  "key" 는 엘리먼트 리스트를 만들 때 포한해야하는 튻수한 문자열 어트리뷰트 이다.
*/

// function NumberList(props){
//   const numbers = props.numbers;
//   const numberList = numbers.map(num => 
//     <li key={num.toString()}>
//       {num}
//     </li>
//   );
//   return (
//     <div>
//       <h1>
//         List
//       </h1>
//       <ul>{numberList}</ul>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<NumberList numbers={numbers} />);

// 위 코드에 LI엘리먼트에 key값을 넣으면 더이상 오류는 발생하지 않는다.

// Key

/* 
  key는 react가 어떤항목을 ㅑ변경 추가 삭제할지 식별하는것을 돕는다.
  key 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야한다.
*/

const listItemKey = numbers.map((number)=> 
  <li key={number.toString()}>
    {number}
  </li>
) 

/* 
  key를 선택하는 가장 좋은 방법은 리스트항목들간에 고유하게 식별할수있는 문자열을 사용하는 것이다.
  대부분의 경우 데이터의 id를 key로 사용한다.

  const todoItems = todos.map((todo) =>
    <li key={todo.id}>
      {todo.text}
    </li>
  );

  렌더링 한 항목에 대한 안정적인 id가 없다면 최후의 수단으로 항목의 인덱스를 key로 ㅏㅅ용할 수있다.

  const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index}>
      {todo.text}
    </li>
  );

  항목의 순서가 바뀔수 있는 경우 key에 인덱스를 사용하는것은 권장하지 않는다.
  이로 인해 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할수 잇다.
  리스트 항목에 명시적으로 key를 지정하지 않으면 React는 기본적으로 인덱스를 key로 사용한다.
*/

////key로 컴포넌트 추출하기

/* 
  키는 주변 배열의 context(컨텍스트..?)에서만 의미가 있다. 예를들어 ListItem 컴포넌트를 추출할 경우
  ListItem 안의 li이 아니라 배열의 ListItem 엘리먼트가 key를 가져야 한다.
  즉, 경험상(공식서에서의) 되도록이면 map() 함수 내부에 있는 엘리먼트에 key를 넣어 주는 게 좋다.
*/

// function ListItem(props){
//   const value = props.value;
//   return (
//     <li>
//       {value}
//     </li>
//   )
// }

// function NumberList(props){
//   const numbers = props.numbers;
//   const listNum = numbers.map(num =>
//     <ListItem key={num.toString()} value={num}/>
//   )
//   return (
//     <ul>{listNum}</ul>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<NumberList numbers={numbers} />);

////KEy는 형제사이에서만 고유한 값이어야 한다.

// Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다. 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수있다. 

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Blog posts={posts} />);

// sidebar의 div 와 content의 li 은 형제 노드간이 아니기 때문에 굳이 고유하지 않아도 된다.

/* 
  react에서 Key는 힌트를 제공하지만, 컴포넌트를 전달하지 않는다. 컴포넌트에서 key와 동일한 값이 필요하다면, 다른이름의 prop으로 명시적으로 전달해야한다.

  const content = posts.map((post) =>
    <Post
      key={post.id}
      id={post.id}
      title={post.title} />
  ); 

  즉, Post 컴포넌트는 props.id는 읽을수잇지만, props.key는 읽을 수 없다.
*/

// jsx에 map() 포함하기

function ListItem(props){
  const value = props.value;
  return (
    <li>
      {value}
    </li>
  )
}

// jsx를 사용하면 중괄호 안에 모든 표현식을 포한할 수 잇다. map 함수의 결과를 인라인으로 처리 가능하다.
function NumberList (props){
  const numbers = props.numbers;
  return (
    <ul>
      {
        numbers.map(num =>
          <ListItem key={num.toString()} value={num} />
        )
      }
    </ul>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NumberList numbers={numbers} />);

/* 
  이 방식을 사용하면 코드가 더 깔끔해지지만 너무 남발하는것은 좋지 않다. js와 마찬가지ㅏ로 가독성을 위해
  변수를 추출해야할지 인라인에 처리해야할지는 개발자가 판단해야한다. 또한, map함수가 너무 중첩되면 컴포넌트로 추출하는것이 좋다.ㅏ
*/

// 9. 폼

// 10. 상태 끌어올리기

// 11. 합성 vs 상속

// 12. React로 생각하기