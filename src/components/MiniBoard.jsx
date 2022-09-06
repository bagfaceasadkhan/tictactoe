import React from "react";
import styled from "styled-components";
const MiniBoard = ({
  minival,
  miniindex,
  updateBoard,
  index,
  bright,
  winner,
}) => {
  return (
    <Container>
      <div
        style={{
          border:
            winner || bright == "bright"
              ? winner
                ? "2px solid #cb4755"
                : "2px solid #00ce7c"
              : "2px solid #876cbf",
          transition: winner ? "1s ease" : "0.5s ease",
        }}
        className="cell"
        onClick={() => {
          updateBoard(index, miniindex);
        }}
      >
        {minival}
      </div>
    </Container>
  );
};

export default MiniBoard;

const Container = styled.div`
  width: 100%;

  .cell {
    border: 2px solid #656668;
    padding: 0;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
