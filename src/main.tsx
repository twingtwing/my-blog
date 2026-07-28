import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

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

// 9. 폼

// 10. 상태 끌어올리기

// 11. 합성 vs 상속

// 12. React로 생각하기