

## 1. Start

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
```

#### ReactDOM.createRoot

React를 시작할때, 위와 같이 import 받아서 시작한다. React 애플리케이션의 최상위(root) 요소를 생성하고 렌더링하기 위해서는 ReactDOM.createRoot 함수를 이용해야 한다. 이 함수는 React 18에서 도입된 새로운 렌더링 방식을 시작하는 함수이며, 기존의 ReactDOM.render()를 대체한다.


#### ! 연산자
!은 TypeScript에서 null이 아님을 단언하는 연산자이다. document.getElementById('root')에 !가 붙은 이유는 null이 아님을 단언해야하기 때문이다.


#### StrictMode

StrictMode는 React 애플리케이션에서 사용되는 컴포넌트에 대해 추가적인 검사를 수행하여 문제를 조기에 발견할 수 있도록 도와준다. 오류 검사하기 위해 렌더링 단계에서 의도적으로 함수를 두 번 호출한다. 대신,  빌드 후에는 비활성화 되기 때문에 개발 중에만 사용해도 문제 없다.


## 2. 리액트 jsx(tsx) 문법

JavaScript를 HTML을 더해서 확장한 문법이기 때문에 JavaScript의 모든 기능이 포함 되어있다. 하지만, JSX안에 javascript 표현식을 사용할려면, 중괄호 {}를 사용해야 한다.

```js
const user = {
    firstName : 'Harper',
    lastName : 'Perez'
};

function fromatName(user){
    return user.firstName + ' ' + user.lastName
}

// jsx(tsx) 문법
const element =
    <h1>
        Hello, {formatName(user)}!
    </h1>;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)
```

## 3. Element Rendering

> 엘리먼트란? React에서 화면에 표시되는 가장 작은 단위
> 렌더링 이란, 현재 컴포넌트의 props와 state의 상태에 기초하여 UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업

```js
const root = ReactDOM.createRoot(document.getElementById('root')); // root dom node
const element= <h1>Hello, world!</h1> // element

root.render(element);  // DOM에 엘리먼트 렌더링
```

위 처럼 엘리먼트를 JSX문법으로 생성하고 렌더링할 수 있다. 하지만, React.createElement()을 사용하면, JSX 문법을 사용하지 않고도 React 엘리먼트를 생성하는것도 가능하다.

```js
const element = React.createElement(
    'h1', // 1번째 인자 : HTML 태그 이름 또는 React 컴포넌트
    {className: 'greeting'}, // 2번째 인자 : 속성(props)
    'Hello, world!' // 3번째 인자 :  자식 요소(children)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

이렇게 여러 방법으로 엘리먼트를 생성 가능하다. 이렇게 발생한 엘리먼트는 브라우저 DOM Element가 아니라 React Element 일반객체이기 때문에 쉽게 생성 가능하다.

- DOM Element : 실제 브라우저 DOM에 존재하는 Element 
- React Element : 리액트 Virtual DOM에 존재하는 Element


### 렌더링된 엘리먼트에 대한 업데이트

React Element은 불변객체이기 때문에 Element를 생성한 이후에는 해당 Element의 자식이나 속성을 변경할 수 없다. Element를 업데이트 할려면 새로운 Element를 생성하고 다시 ReactDOM.render()를 다시 호출해야 한다.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(element);
} 

setInterval(tick, 1000);
```

하지만 이렇게 변경이 일어날 때마다 전체 DOM을 새롭게 만드는 기존 방식은 매우 비효율적이다. 이를 극복하기 위해 React는 실제 DOM과 동일한 구조를 갖지만 브라우저에는 렌더링되지 않는 메모리 상의 가벼운 '가상 DOM'을 사용한다. 

새로운 엘리먼트가 계속 생성되더라도, React는 이전 엘리먼트와 새로운 엘리먼트를 가상 DOM 상에서 먼저 비교한다. 이후 전체를 다시 그리는 대신 변경된 부분만 실제 DOM에 반영하는 방식으로 작업을 수행하기 때문에, 매번 렌더링을 새로 요청하더라도 매우 효율적인 UI 업데이트가 가능하다.

## 4. 컴포넌트와 props

> component란? UI를 독립적이고 재사용 가능한 조각으로 나누는 방법을 말한다.

컴포넌트를 정의하는 가장 간단한 방법은 함수형 컴포넌트를 사용하는 것이다.

```js
function Welcome (props: {name: String}){
    return <h1>Hello, {props.name}</h1>;
}
```

### 컴포넌트 렌더링

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />

root.render(element);
```

이전까지는 Dom 태그만을 이용해 React 엘리먼트를 만들었지만, React 엘리먼트는 위 코드 처럼 사용자 정의 컴포넌트로도 나타낼수 있다. react가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트(속성)와 자식을 모아서 해당 컴포넌트에 단일객체로 전달한다. 
이 단일 객체를 **props**라고 부른다. props는 읽기 전용이며, 컴포넌트는 전달받은 props를 변경할 수 없다. 
  
즉, 하나의 컴포넌트를 만들고, Prop을 전달하여 각기 다른 결과를 렌더링할 수 있다. 이를 통해 코드의 재사용성이 획기적으로 향상된다.

#### props?

`<Welcome age="{20}" name="Sara">안녕하세요</Welcome>` 있다면, 리액트는 이 코드를 보고 사용자가 직접 만든 컴포넌트라는 것을 알아 차린다. 이때, `age="{20}" name="Sara"`는 JSX 어트리뷰트(속성) 이며, 그리고 태그 사이에 적은 내용 `안녕하세요`은 자식이다. 이러한 정보들을 모두 모아서 단일 객체로 전달하는 데 이를 **props**라고 한다.


### 컴포넌트 합성

React에서 컴포넌트는 자신의 출력 결과에 또 다른 컴포넌트를 포함(참조)할 수 있다. 이러한 특징 덕분에 아주 작은 단위인 버튼이나 폼부터 다이얼로그, 심지어 복잡한 전체 화면에 이르기까지 모든 세부 단계에서 동일하게 추상화된 컴포넌트를 사용할 수 있다. 결과적으로 React 앱에서는 화면을 구성하는 크고 작은 모든 것들이 흔히 컴포넌트로 표현되며, 이를 자유롭게 조립하여 하나의 완성된 UI를 만들 수 있다.

```js
function App(){
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Tom" />
            <Welcome name="Wine" />
            <Welcome name="Blue" />
        </div>
    )
}
```

### 컴포넌트 추출

컴포넌트가 구성요소들이 모두 중첩구조로 이루어져 있을 경우, 변경하기가 어렵고 개별적으로 재사용하기도 힘들다. 그렇기 때문에 컴포넌트에서 몇가지 컴포넌트를 추출해서 사용한다.

```js
function Comment(props) {
    return (
        <div className = "Comment">
            <UserInfo user = {props.author}/>
            <div className = "Comment-text">
                {props.text}
            </div>
        </div>
    )
}

function UserInfo(props) {
    return (
        <div className = "UserInfo">
            <Avatar user = {props.user}/>
            <div className = "UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Avatar(props) {
    return (
        <img className = "Avatar" 
            src = {props.user.url}
            alt = {props.user.name}
        />
    )
}
```

이때, Avatar/UserInfo에서 props.author/props.user가 다른 이유는 굳이 자식이 렌더링된다는거를 알 필요 없기 때문에 일반화된 user을 대신 사용한것이다.

### props 잃기 전용

React의 모든 컴포넌트는 부모로부터 전달받은 props를 직접 수정할 수 없는 '읽기 전용' 데이터로 취급한다.

```js
function sum(a, b) {
    return a + b;
}
```

위 함수처럼 입력값을 수정하지 앖고 항상 동일한 입력값에 대해 동일한 출력값을 반환하는 함수를 순수 함수라고 한다.

반면 다음 함수는 입력값을 수정하고, 동일한 입력값에 대해 다른 출력값을 반환할 수 있기 때문에 순수함수라고 할 수 없다.

```js
function withdraw(a, b) {
    a.total -= b;
}
```

여기서 React는 중요한 규칙이 있다 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.즉, 컴포넌트는 전달받은 props를 수정하지 않고, 동일한 props에 대해 항상 동일한 UI를 렌더링해야 한다.

물론 애플리케이션UI는 동적이며 시간에 따라 변한다. 이때 React는 컴포넌트의 상태(state)를 사용하여 UI를 동적으로 업데이트한다. React 컴포넌트는 state를 통해 위 규칙을 위반하지 않고, 사용자 액션, 네트워크 응답 및 다른 요소에 대한 응답으로 시간에 따라 자신의 값을 변경할 수 있다.

## 5.state와 생명주기

```js
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock (props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}

function tick(){
    root.render(<Clock date = {new Date()}/>)
}

setInterval(tick, 1000);
```

Clock 컴포넌트가 타이머를 설정하고 매초 UI를 업데이트하지만, 이는 타이머를 설정해서 가능하다. 그렇기 때문에 컴포넌트 스스로 업데이트 되도록 구현해야 한다. 이를 위해 state와 생명주기 기능을 사용해야 하고, 이를 위해 클래스 컴포넌트를 구현해야한다...? 맞을까?

```js
// 리액트의 모든 Class Component는 React.Component를 상속받는다.
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
```

`render` 메서드는 업데이트가 발생할때마다 호출되지만, 같은 DOM노드로  <Clock />을 렌더링하는 경우 Clock 클래스의 단일 인스턴스만 사용된다. 즉, 화면이 계속 바뀌어도 React는 그 컴포넌트를 부수고 다시 새로 만드는것이 아니라 기존에 만들어둔것을 **재사용**한다. React가 컴포넌트 인스턴스(실체)를 파괴하지 않고 하나만 계속 유지해주기 때문에, 우리가 **state와 생명주기 기능** 같은 것을 마음놓고 사용할 수 있다

### Class Component에 로컬 state 추가

```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
```
1. `constructor`를 호출 
    - Clock 컴포넌트가 root.render()로 전달 되었을때, React는 해당 컴포넌트의 `constructor`를 호출한다. 
    - Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화된다.
2. `render()` 메서드 호출 
    - React는 Clock 컴포넌트의 render() 메서드를 호출하면서 화면에 표시되어야 할 내용을 파악한다. 
    - React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트한다. 
3. `componentDidMount()` 생명주기 메서드를 호출
    - Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출한다.
    - 가상 DOM이 실제 DOM으로 변환되고, 이 과정에서 실제 HTML 요소들이 생성되어 브라우저의 DOM에 삽입된다.

이러한 React component가 처음으로 생성되어 웹 브라우저 화면의 DOM에 추가되는 과정을 **마운팅(Mounting)**이라고 한다. 

`componentDidMount()` 실행하면서, Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 등록한다. tick() 메서드를 호출될때마다, Clock 컴포넌트는 `setState()`에 현재 시각을 포함하는 객체를 호출하면서 UI 업데이트를 진행한다. 
setState() 호출 덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 `render()` 메서드를 다시 호출한다. 이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 업데이트된 시각을 포함하고, React는 이에 따라 DOM을 업데이트한다.

Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 `componentWillUnmount()` 생명주기 메서드를 호출한다. 이를 이를 언마운팅이라고 한다. 이러한 메서드들을 생명주기 메서드라고 한다.

### state 올바른 사용

#### state 직접 수정 불가

state의 값을 직접 수정하면 React가 변경 사항을 감지하지 못해 화면을 다시 렌더링하지 못한다. 따라서 반드시 `setState()`를 사용해서 업데이트해야 한다.

```js
this.state.comment = 'HI' // Wrong

this.setState({           // Correct
    comment: 'HI'
})
```

단, 컴포넌트 생성자인 constructor 내부에서 초기 상태를 설정할 때만 유일하게 this.state = ... 형태의 직접 할당이 허용된다.

#### state 업데이트는 비동기적일 수 있다.

React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 일괄 처리 될 수 있다. 이때문에 this.props와 this.state가 비동기적으로 업데이트될 수 있어, 다음 state를 계산할 때 this.state.counter 처럼 현재 인스턴스의 값을 바로 참조하면 이전 값이 계산에 들어가 오류가 발생할 수 있다.

```js
this.setState({          
    counter: this.state.counter + this.props.increment, 
})   // Wrong

this.setState((state, props) => ({           
    counter: state.counter + props.increment,
})); // Correct
```

this를 이용해서 바로 읽어오지 말고, setState가 인자로 제공하는 최신 state와 props를 받아 처리하는 것이 가장 안전하다. 

#### state 업데이트는 병합가능

setState()를 호출할 때 객체를 전달하면, React는 그 객체를 현재 state에 얕은 병합(Shallow merge) 한다.

```js
constructor(props){
    super(props);
    this.state = {
        posts: [],
        comments: [],
    };
}

componentDidMount(){
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
```

1. 처음 상태 : { posts: [], comments: [] } 
1. fetchPosts 상태 : { posts: [새글], comments: [] } 
1. fetchComments 상태 : { posts: [새글], comments: [새댓글] } 

병합이 얇게 이루어지기 때문에 fetchComments에서 setState({ comments: ... })를 호출해도 this.state.posts에 영향을 주진 않는다.즉, setState()는 전체 state를 다 덮어쓰는 것이 아니라, 전달받은 속성만 선택적으로 업데이트하고 나머지는 그대로 유지한다.

### 하향식 데이터 흐름

React의 데이터는 위에서 아래로 흐르기 때문에 "하향식(Top-down)" 또는 "단방향" 데이터 흐름이라고 한다.

```js
<FormattedDate date={this.state.date} />
```

데이터는 양방향이 아닌 단방향(위 → 아래)으로만 흐른다. 모든 state는 항상 그것을 소유한 특정 컴포넌트 안에 존재하며, 그 state로부터 파생된 UI나 데이터는 컴포넌트 트리 구조에서 오직 자신의 "아래"에 있는 자식 컴포넌트에만 영향을 미친다. 따라서 데이터(props)를 전달받는 하위(자식) 컴포넌트는 그 데이터가 부모의 state에서 왔는지, 아니면 수동으로 입력된 값인지 알지 못하고 알 필요도 없다.

데이터가 항상 아래로만 향하기 때문에, 각 컴포넌트는 서로에게 직접적인 간섭을 주지 않고 **완전한 독립성**을 유지한다.

```js
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
```

위 코드처럼 <App/> 컴포넌트 안에 세 개의 <Clock/>을 나열하더라도, 각 <Clock/>은 자신만의 독립적인 state를 가지고 동작한다. 데이터가 오직 자신의 아래로만 영향을 주기 때문에 나란히 위치한 <Clock/> 컴포넌트들끼리는 서로 전혀 영향을 주지 않는다.

## 6.이벤트 처리

React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사하지만, 몇 가지 명확한 차이점이 존재한다.

1. **캐멀 케이스(camelCase) 사용:** React의 이벤트 이름은 소문자(`onclick`) 대신 캐멀 케이스(`onClick`)를 사용한다.
2. **함수 참조 전달:** JSX를 사용하여 문자열이 아닌 **함수 자체(참조)**를 이벤트 핸들러로 전달한다.

```js
// HTML
<button onclick="activateLasers()">
    Activate Lasers
</button>

// JSX
<button onClick={activateLasers}> 
    Activate Lasers
</button>
```

만약 JSX에서 `onClick={activateLasers()}`처럼 괄호를 붙이면, 클릭 시 실행되는 게 아니라 컴포넌트가 렌더링되는 순간 함수가 즉시 실행된다.

또한, HTML에서는 return false를 반환하여 기본 동작을 방지할 수 있었지만, React에서는 동작하지 않으므로 `e.preventDefault()`를 명시적으로 호출해야 한다.

```js
// HTML
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>

// JSX
function Form(){
  function handleSubmit(e) {
    e.preventDefault(); 
  }
  return (
    <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
    </form>
  )
}
```

### 리스너 이벤트

React에서는 DOM 엘리먼트가 생성된 후 이벤트를 붙이기 위해 `addEventListener`를 직접 호출할 필요가 없다. 대신, 엘리먼트를 렌더링할 때 JSX 속성으로 이벤트 핸들러를 직접 전달해주면 된다. 

```js
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prev => ({
            isToggleOn: !prev.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
```

JavaScript 클래스 메서드는 기본적으로 this가 바인딩되어 있지 않다. 따라서 onClick={this.handleClick}처럼 뒤에 ()를 붙이지 않고 참조만 전달할 경우, 실제 클릭 이벤트가 발생할 때 함수 내부의 this가 undefined가 되는 문제가 발생한다. 이를 해결하는 방법은 크게 3가지가 있다.
 
1. 생성자(constructor)에서 `.bind()` 처리 : 생성자 안에서 .bind(this)를 사용해 handleClick 내부의 this가 무조건 Toggle 클래스 인스턴스 자신을 가리키도록 강제로 고정한다.

```js
constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
}
```

2. 클래스 필드 문법 사용 : 메서드를 선언할 때 화살표 함수를 사용한다. 화살표 함수는 상위 스코프의 this를 자동으로 바인딩하므로, 생성자에서 일일이 .bind()를 작성하지 않아도 된다.

```js
handleClick = () => {
    this.setState(prev => ({
        isToggleOn: !prev.isToggleOn
    }));
}
```

3. render() 메서드 안에서 화살표 함수 사용 : JSX 전달부 안에서 직접 화살표 함수를 만드는 방법이다. 하지만 이 방식은 컴포넌트가 렌더링될 때마다 매번 새로운 콜백 함수가 생성된다. 이 콜백이 하위 컴포넌트에 prop으로 전달되는 경우, 매번 다른 prop으로 인식되어 하위 컴포넌트까지 불필요하게 리렌더링되는 성능 문제가 발생할 수 있다. 그렇기 때문에 권장하지 않는 방법이다.

```js
render() {
    return (
        <button onClick={() => this.handleClick()}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    )
}
```

### 이벤트 핸들러에 인자 전달

루프 내부에서는 이벤트 핸들러에 ID 같은 추가적인 매개변수를 전달해야 하는 경우가 많다. 이때는 **화살표 함수**나 **`bind`** 메서드를 사용하여 인자를 전달한다. 

```js
// 1. 화살표 함수 사용
<button onClick={(e) => this.deleteRow(id, e)}> Delete Row </button>

// 2. Function.prototype.bind 사용
<button onClick={this.deleteRow.bind(this, id)}> Delete Row </button>

function deleteRow(id, e) {
    // id: 전달받은 데이터 (첫 번째 인자)
    // e : React 이벤트 객체 (두 번째 인자)
}
```

두 방식 모두 React 이벤트 객체인 e가 두 번째 인자로 deleteRow 메서드에 동일하게 전달된다.
- 화살표 함수: (e) => ...처럼 이벤트 객체 e를 받아서 deleteRow 내부로 명시적으로 넘겨주어야 한다.
- bind 방식: 바인딩할 인자(id)만 지정해 두면, React의 이벤트 객체 e는 자동으로 가장 마지막 인자로 전달되므로 코드에 직접 작성할 필요가 없다.

## 7. 조건부 렌더링