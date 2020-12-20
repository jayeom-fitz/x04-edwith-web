import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Todo from "../components/Todo"
import { Link } from "react-router-dom";

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
  padding-bottom: 100px;
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
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <ButtonBar>
          <Link to={`/todo/write`}>
            <Button>ADD TODO</Button>
          </Link>
        </ButtonBar>

        <List>
          <Box>TODO</Box>
        </List>
        <List>
          <Box>DOING</Box>
        </List>
        <List>
          <Box>DONE</Box>
        </List>

      </Container>
      <Footer />
    </>
  );
}

export default TodoList;