"use client";

import { useState } from "react";
import Tile from "./components/Tile/Tile";

import styles from "./page.module.css";

const BOARD_SIZE = 9;

const checkForWinner = (board: Array<string>): string | boolean => {
  const winningSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningSets.length; i++) {
    const [a, b, c] = winningSets[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  // cat's game
  let count = 0;
  for (let j = 0; j < BOARD_SIZE; j++) {
    if (board[j]) {
      count++;
    }
  }
  if (count === BOARD_SIZE) {
    return true;
  }

  return false;
};

export default function Home() {
  const [tiles, setTiles] = useState<Array<string>>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);

  const handleTileClick = (index: number): void => {
    const copyTiles = tiles.slice();
    const copyIsPlayerTurn = Boolean(isPlayerTurn);

    if (copyTiles[index] || checkForWinner(copyTiles)) {
      return;
    }

    copyIsPlayerTurn ? (copyTiles[index] = "X") : (copyTiles[index] = "O");

    setTiles(copyTiles);
    setIsPlayerTurn(!copyIsPlayerTurn);
  };

  const handleResetClick = (): void => {
    const newBoard = Array(9).fill(null);

    setTiles(newBoard);
    setIsPlayerTurn(true);
  };

  const isGameOver = checkForWinner(tiles);
  let gameStatusMsg = "Next Tac Toe";
  if (typeof isGameOver === "string") {
    gameStatusMsg = `${isGameOver} Wins!`;
  } else if (isGameOver) {
    gameStatusMsg = "Cat's Game!";
  }

  const gameTurnMsg = isPlayerTurn ? "X's turn" : "O's turn";
  const gameOverMsg = "Game Over!";

  return (
    <main className={styles.game}>
      <div className={styles.gameStatus}>
        <h1>{gameStatusMsg}</h1>
        <h3>{isGameOver ? gameOverMsg : gameTurnMsg}</h3>
      </div>
      <div className={styles.board}>
        <div className={styles.boardRow}>
          <Tile value={tiles[0]} onTileClick={() => handleTileClick(0)} />
          <Tile value={tiles[1]} onTileClick={() => handleTileClick(1)} />
          <Tile value={tiles[2]} onTileClick={() => handleTileClick(2)} />
        </div>
        <div className={styles.boardRow}>
          <Tile value={tiles[3]} onTileClick={() => handleTileClick(3)} />
          <Tile value={tiles[4]} onTileClick={() => handleTileClick(4)} />
          <Tile value={tiles[5]} onTileClick={() => handleTileClick(5)} />
        </div>
        <div className={styles.boardRow}>
          <Tile value={tiles[6]} onTileClick={() => handleTileClick(6)} />
          <Tile value={tiles[7]} onTileClick={() => handleTileClick(7)} />
          <Tile value={tiles[8]} onTileClick={() => handleTileClick(8)} />
        </div>
      </div>
      <div className={styles.menu}>
        <button onClick={handleResetClick}>Reset</button>
        <a type="button" href="/about">
          <button>About</button>
        </a>
      </div>
    </main>
  );
}
