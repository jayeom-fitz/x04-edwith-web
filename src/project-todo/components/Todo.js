import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 95%;
  height: 70px; 
  margin: 0 auto 10px;
  border-radius: 8px;
  background-color: #83CECA;
`;

const Content = styled.h1`
  padding: 5% 0 0 5%;
  font: 700 1.0rem sans-serif;
`;

const Detail = styled.h1`
  padding: 1% 0 0 5%;
  font: 500 0.8rem sans-serif;
`;

function Todo ({ todo }) {
  return (
    <Box>
      <Content>
        {todo}
      </Content>
      <Detail>
        {todo}
      </Detail>
    </Box>
  );
};

export default Todo;