import React from "react";
import styled from "styled-components";

import Ultimate from "./Ultimate";
const MainContainer = () => {
  return (
    <Container>
      <Ultimate />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
