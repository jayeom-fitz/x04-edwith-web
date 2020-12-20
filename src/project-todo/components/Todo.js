import React from "react";
import styled from "styled-components";
import { AiFillEdit, AiFillCaretRight } from "react-icons/ai";
import { dbService } from "../../fbase";

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
  font: 500 0.6rem sans-serif;
`;

const Button = styled.button`
  width: 10%;
  padding: 1% 2%; 
  margin: 0 2%;
  float: right;
  border: none;
  border-radius: 100%;

  &:hover {
    background-color: #34EE15;
    color: white;
  }
`;

function Todo ({ todoObj }) {
  const onMoveRight = async (event) => {
    const ok = window.confirm("Are you sure that this TODO move to the right?");
    if(ok) {
      await dbService.doc(`whatTodo/${todoObj.id}`).update({
        state: todoObj.state + 1
      });
      window.history.go(0);
    }
  };

  return (
    <Box>
      <Content>
        {todoObj.todo.length < 10 ? todoObj.todo : todoObj.todo.substring(0,9) + "..."}
      </Content>
      <Detail>
        {todoObj.createdAt} - {todoObj.priority}순위
        
        {todoObj.state === 3 ? 
          <></>
          :
          <Button onClick={onMoveRight}><AiFillCaretRight /></Button>
        }
        <Button><AiFillEdit /></Button>
      </Detail>
    </Box>
  );
};

export default Todo;