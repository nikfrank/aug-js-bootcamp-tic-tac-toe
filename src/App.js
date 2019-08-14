import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    board: [
      [ null, null, null ],
      [ null, null, null ],
      [ null, null, null ],
    ]
  }

  makeMove = (row, col)=> {
    if( this.state.board[row][col] || this.state.winner ) return;

    let xs = 0;
    let os = 0;

    for(let r=0; r<(3); r++){
      for(let c=0; c<(3); c++){
        if( this.state.board[r][c] === 'X' ) xs++;
        if( this.state.board[r][c] === 'O' ) os++;
      }
    }

    let nextMove;
    if( xs === os ) {
      // x's turn
      nextMove = 'X';
    } else {
      // o's turn
      nextMove = 'O';
    }

    const nextBoard = this.state.board;
    nextBoard[row][col] = nextMove;

    this.setState({ board: nextBoard }, this.checkEndGame);
  }

  checkEndGame = ()=> {
    const board = this.state.board;
    let winner;

    // rows
    for(let r=0; r<(3); r++){
      if( (board[r][0] === board[r][1]) && (board[r][0] === board[r][2]) ){
        if(board[r][0]) winner = board[r][0];
      }
    }

    // cols
    for(let c=0; c<(3); c++){
      if( (board[0][c] === board[1][c]) && (board[0][c] === board[2][c]) ){
        if(board[0][c]) winner = board[0][c];
      }
    }

    // diagonals
    if( (board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) ){
      if(board[0][0]) winner = board[0][0];
    }

    if( (board[0][2] === board[1][1]) && (board[0][2] === board[2][0]) ){
      if(board[0][2]) winner = board[0][2];
    }

    if( winner ){
      this.setState({ winner });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.winner ? (<h1>{this.state.winner}</h1>) : null}

        <div className='board'>
          <div className='row'>
            <div className='cell' onClick={()=> this.makeMove(0, 0)}>
              {this.state.board[0][0]}
            </div>
            <div className='cell' onClick={()=> this.makeMove(0, 1)}>
              {this.state.board[0][1]}
            </div>
            <div className='cell' onClick={()=> this.makeMove(0, 2)}>
              {this.state.board[0][2]}
            </div>
          </div>

          <div className='row'>
            <div className='cell' onClick={()=> this.makeMove(1, 0)}>
              {this.state.board[1][0]}
            </div>
            <div className='cell' onClick={()=> this.makeMove(1, 1)}>
              {this.state.board[1][1]}
            </div>
            <div className='cell' onClick={()=> this.makeMove(1, 2)}>
              {this.state.board[1][2]}
            </div>
          </div>

          <div className='row'>
            <div className='cell' onClick={()=> this.makeMove(2, 0)}>
              {this.state.board[2][0]}
            </div>
            <div className='cell' onClick={()=> this.makeMove(2, 1)}>
              {this.state.board[2][1]}
            </div>
            <div className='cell' onClick={()=> this.makeMove(2, 2)}>
              {this.state.board[2][2]}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
