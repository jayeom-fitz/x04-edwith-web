import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dbService } from "../../fbase";

const Container = styled.div`
  top: 0;  
  margin: 150px 20% 0px 20%;
`;

const MainTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

const Title = styled.h3``;

const Button = styled.button`
  width: 20%;
  height: 50px;
  margin-top: 20px;
`;

function Write() {
  const [todo, setTodo] = useState("");
  const [who, setWho] = useState("");
  const [priority, setPriority] = useState(1);

  const onTodoChange = (event) => {
    const {target: {value},} = event;
    setTodo(value);
  };
  const onWhoChange = (event) => {
    const {target: {value},} = event;
    setWho(value);
  };
  const onPriorityChange = (event) => {
    const {target: {value},} = event;
    setPriority(value);
  };

  const onWrite = async (event) => {
    if (todo === "" || who === "") {
      return;
    }

    await dbService.collection("whatTodo").add({
      todo,
      who,
      priority,
      createdAt: Date.now(),
      state: 1
    });

  };

  return (
    <>
      <Header />
      
      <Container>
        <MainTitle>ADD TODO</MainTitle>

        <Title>What To Do ?</Title>
        <input onChange={onTodoChange} type="text" name="todo" style={{
          width:'80%', height:'20px'}} maxLength="50" required />

        <Title>Who Do That ?</Title>
        <input onChange={onWhoChange} type="text" name="who" style={{
          width:'50%', height:'20px'}} maxLength="30" required />

        <Title>Select Priority</Title>
        <div>
          <input onChange={onPriorityChange} style={{margin:'0 10px 0 10px'}} type="radio" name="priority" value="1" checked="checked" />1 
          <input onChange={onPriorityChange} style={{margin:'0 10px 0 10px'}} type="radio" name="priority" value="2" />2 
          <input onChange={onPriorityChange} style={{margin:'0 10px 0 10px'}} type="radio" name="priority" value="3" />3
        </div>        
        
        <Button onClick={onWrite}>WRITE</Button>
        <Link to="/todo/list"><Button>CANCEL</Button></Link>
      </Container>

      <Footer />
    </>
  );
}

export default Write;