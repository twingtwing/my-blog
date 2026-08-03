import React from 'react'
import ReactDOM from 'react-dom/client'
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