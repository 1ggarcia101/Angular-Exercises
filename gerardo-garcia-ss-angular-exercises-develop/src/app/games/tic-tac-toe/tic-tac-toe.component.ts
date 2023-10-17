import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent {
  gameForm: FormGroup;
  isDraw: boolean = false;
  currentPlayer: 'X' | 'O' = 'X'; // Start with player X
  winner: 'X' | 'O' | null = null; // Initialize with no winner
  board: (null | 'X' | 'O')[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  constructor() {
    this.gameForm = new FormGroup({});
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.initFormControls();
  }

  private initFormControls() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const controlName = `cell_${row}_${col}`;
        this.gameForm.addControl(controlName, new FormControl(''));
      }
    }
  }

  makeMove(row: number, col: number) {
    // Check if the cell is empty and it's not a winning move
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      this.gameForm.get(`cell_${row}_${col}`)?.setValue(this.currentPlayer);

      // Check for a win
      if (this.checkForWin(row, col, this.currentPlayer)) {
        this.winner = this.currentPlayer;
      } else {
        // Increment the move count
        let moveCount = 0;
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            if (this.board[r][c]) {
              moveCount++;
            }
          }
        }

        // If there are 9 moves, and no player has won, it's a draw
        if (moveCount === 9) {
          this.isDraw = true;
        }

        // Switch players
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkForWin(row: number, col: number, player: 'X' | 'O'): boolean {
    // Check for a win in the row
    let win = true;
    for (let c = 0; c < 3; c++) {
      if (this.board[row][c] !== player) {
        win = false;
        break;
      }
    }
    if (win) return true;

    // Check for a win in the column
    win = true;
    for (let r = 0; r < 3; r++) {
      if (this.board[r][col] !== player) {
        win = false;
        break;
      }
    }
    if (win) return true;

    // Check for a win in the main diagonal (top-left to bottom-right)
    if (row === col) {
      win = true;
      for (let i = 0; i < 3; i++) {
        if (this.board[i][i] !== player) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }

    // Check for a win in the other diagonal (top-right to bottom-left)
    if (row + col === 2) {
      win = true;
      for (let i = 0; i < 3; i++) {
        if (this.board[i][2 - i] !== player) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }

    return false;
  }

  resetGame() {
    // Clear the game board by filling it with empty values (null)
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    this.currentPlayer = 'X';

    this.winner = null;

    this.isDraw = false;
  }
}
