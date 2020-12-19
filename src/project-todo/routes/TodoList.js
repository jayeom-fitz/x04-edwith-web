import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Todo from "../components/Todo"

const Container = styled.div`
  top: 0;  
  margin: 150px 10% 0px 10%;
`;

const ButtonBar = styled.div`
  width: 100%;
  margin: auto;
  display: inline-block;
`;

const Button = styled.button`
  width: 15%;
  height: 30px;
  margin: 0 5px 20px 0;
  border: none;
  border-radius: 4px;
  background-color: #1578EE;
  color: white;
  float: right;
`;

const List = styled.div` 
  width: 33%;
  float: left;
`;

const Box = styled.div`
  width: 95%;
  height: 50px; 
  margin: 0 auto 10px;
  border-radius: 4px;
  background-color: #1D2261;
  font: 700 1.5rem sans-serif;
  text-align: center;
  color: white;
`;



function TodoList() {
  return (
    <>
      <Header />
      <Container>
        <ButtonBar>
          <Button>ADD TODO</Button>
        </ButtonBar>

        <List>
          <Box>TODO</Box>
          <Todo todo="to do what" />
          <Todo todo="to do what" />
          <Todo todo="to do what" />
          <Todo todo="to do what" />
        </List>
        <List>
          <Box>DOING</Box>
          <Todo todo="to do what" /><Todo todo="to do what" />
        </List>
        <List>
          <Box>DONE</Box>
          <Todo todo="to do what" />
        </List>

      </Container>
      <Footer />
    </>
  );
}

export default TodoList;