import React from 'react'
import './TicTacToe.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square(props) {
  return (
    // function 이므로 this.을 사용할 필요 없음
    <button className="square" onClick={props.onClick}> 
      {props.value}
    </button>
  );
}

class Board extends React.Component { 
  renderSquare(value) {
    return (
      <Square
        value={this.props.squares[value]}
        /*
          이벤트 핸들러에 인자를 전달해야하는 경우,
          function 을 사용하면, 즉시 실행되기 때문에 콜백 형태로 감싸야한다.
          그래서 화살표 함수나 bind 메서드를 사용 한다.
        */
        onClick={() => this.props.onClick(value)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


/* 
  단일 출처(Single Source of Truth): 데이터는 한 곳에서만 관리하여 동기화 오류 방지
  상태 끌어올리기(Lifting State Up): Board와 info가 공유하는 state를 공통 부모(Game)로 이동
*/
class Game extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null)}],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // 미래는 모두 제거
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // 얇은 새로운 복사

    if(calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O'; // 복사본 부분 변경
    this.setState({
      history: history.concat([{squares : squares}]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    }); 
  }

  handleJump(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    let status;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    if(winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        // list는 key값을 가진다.
        <li key={move}>
          <button onClick={() => this.handleJump(move)}>{desc}</button>
        </li>
      )

    })

    /* 
      이벤트 핸들러에 인자를 전달해야할 경우, 화살표 함수나 bind 메서드를 사용해야하는데 
      이 방법 모두 둘 다 매 렌더링마다 새로운 함수 객체를 만들어야한다.
      어차피 새 함수를 만들므로, 화살표 함수를 사용하면 더 간결하게 작성할 수 있다.
    */
    return (
      <div className='game'>
        <div className='game-board'>
          <Board 
            squares = {current.squares}
            /* 
              (i)는 Board가 넘겨준 '클릭된 칸 번호'를 받아서 handleClick으로 전달해주는 인자 값.
              onClick={() => this.props.onClick(value)}을 보면 칸의 위치 값을 인자로 담아 호출 하고있음.
              그러면 그 위치번호를 Game 컴포넌트의 (i) => ... 로 받아서 this.handleClick(i)로 넘겨줌
            */
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

export default Game