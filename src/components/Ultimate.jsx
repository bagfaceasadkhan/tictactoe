import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MiniBoard from "./MiniBoard";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Ultimate = () => {
  //States and Variables
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  const [activePlayerX, setActivePlayerX] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(Array(9).fill("")));
  const [nextBoard, setNextBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [winner, setWinner] = useState(false);
  //Functions
  const updateBoard = function (index, miniindex) {
    const tempBoard = JSON.parse(JSON.stringify(board));
    if (!tempBoard[index][miniindex] && nextBoard.includes(index)) {
      tempBoard[index][miniindex] = activePlayerX ? "X" : "O";
      const winnerDetected = checkMiniWinner(index, tempBoard);
      console.log(winnerDetected);
      setBoard(tempBoard);
      setActivePlayerX((prev) => !prev);
      if (!winnerDetected) {
        setNextBoard(
          tempBoard[miniindex].toString() !== "X,X,X,X,X,X,X,X,X" &&
            tempBoard[miniindex].toString() !== "O,O,O,O,O,O,O,O,O"
            ? [miniindex]
            : [0, 1, 2, 3, 4, 5, 6, 7, 8]
        );
      } else {
        tempBoard[index] = Array(9).fill(winnerDetected);
        checkBigWinner(tempBoard);
        setNextBoard(
          tempBoard[miniindex].toString() !== "X,X,X,X,X,X,X,X,X" &&
            tempBoard[miniindex].toString() !== "O,O,O,O,O,O,O,O,O"
            ? [miniindex]
            : [0, 1, 2, 3, 4, 5, 6, 7, 8]
        );
      }
    }
  };

  const checkMiniWinner = function (index, tempBoard) {
    for (let combination of winningCombinations) {
      let [a, b, c] = combination;
      if (
        tempBoard[index][a] &&
        tempBoard[index][a] === tempBoard[index][b] &&
        tempBoard[index][a] === tempBoard[index][c]
      ) {
        return tempBoard[index][a];
      }
    }
    return false;
  };

  const checkBigWinner = function (tempBoard) {
    for (let combination of winningCombinations) {
      let [a, b, c] = combination;
      if (
        tempBoard[a].toString() !== ",,,,,,,," &&
        tempBoard[a].toString() === tempBoard[b].toString() &&
        tempBoard[a].toString() === tempBoard[c].toString()
      ) {
        setBoard(Array(9).fill(Array(9).fill(tempBoard[a][0])));
        setWinner(true);
      }
    }
  };
  //Render
  return (
    <Container>
      <div className="header">
        <div>Ultimate tictactoe</div>
        <div>bagfaceasadkhan</div>
      </div>
      <div className="board">
        {board.map((val, index) => {
          return (
            <div className="miniboard">
              {val.map((minival, miniindex) => {
                return (
                  <MiniBoard
                    minival={minival}
                    miniindex={miniindex}
                    updateBoard={updateBoard}
                    index={index}
                    bright={index == nextBoard ? "bright" : ""}
                    winner={winner}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="header one">
        <div>bagfaceasadkhan©</div>
        <div>
          <a href="https://github.com/bagfaceasadkhan" target={"_blank"}>
            <GitHubIcon style={{ fill: "#c2fae0" }} fontSize="small" />
          </a>
          <a
            href="https://www.linkedin.com/in/asadkhanpathan/"
            target={"_blank"}
          >
            <LinkedInIcon style={{ fill: "#c2fae0" }} fontSize="small" />
          </a>
          <a href="https://www.instagram.com/asadkhan1536" target={"_blank"}>
            <InstagramIcon style={{ fill: "#c2fae0" }} fontSize="small" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Ultimate;

const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .header {
    width: 100%;
    display: flex;
    margin: 15px;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
  }
  .one {
    justify-content: space-between;
    div {
      a {
        margin-left: 13px;
      }
    }
  }
  .board {
    width: 100%;
    aspect-ratio: 1/1;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    .miniboard {
      display: grid;
      grid-gap: 5px;
      width: 100%;
      aspect-ratio: 1/1;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;
