import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
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
  margin-right: 20px;
`;

function TodoEdit() {
  const { id } = useParams();
  const [todoObj, setTodoObj] = useState(null);
  
  useEffect(() => {
    dbService.collection("whatTodo").doc(`${id}`).get().then((doc) => {
      const data = {
        ...doc.data(), id
      };
      setTodoObj(data);
    });  
  }, [id]);

  const onChange = (event) => {
    let { value, name } = event.target;
    if(name === "priority") value = parseInt(value);
    setTodoObj({
      ...todoObj,
      [name]: value
    });
  };

  const onEdit = async (event) => {
    if (todoObj.todo === "" || todoObj.who === "") {
      return;
    }
    
    const ok = window.confirm("Are you sure to change this TODO?");
    if(ok) {
      await dbService.doc(`whatTodo/${todoObj.id}`).update({
        todo: todoObj.todo,
        who: todoObj.who,
        priority: todoObj.priority,
      });
      window.history.back();
    }
  };

  const onDelete = async (event) => {   
    const ok = window.confirm("Are you sure to << DELETE >> this TODO?");
    if(ok) {
      await dbService.doc(`whatTodo/${todoObj.id}`).delete();
      window.history.back();
    }
  };

  return (
    <>
      <Header />
      
      <Container>
        {todoObj == null ? <>

        </> : <>     
          <MainTitle>EDIT TODO</MainTitle>

          <Title>What To Do ?</Title> 
          <input value={todoObj.todo} onChange={onChange} type="text" name="todo" style={{
            width:'80%', height:'20px'}} maxLength="50" required />

          <Title>Who Do That ?</Title>
          <input value={todoObj.who} onChange={onChange} type="text" name="who" style={{
            width:'50%', height:'20px'}} maxLength="30" required />

          <Title>Select Priority</Title>
          <div>
            <input checked={todoObj.priority === 1 ? true : false} onChange={onChange} style={{margin:'0 10px 0 10px'}} type="radio" name="priority" value="1" />1 
            <input checked={todoObj.priority === 2 ? true : false} onChange={onChange} style={{margin:'0 10px 0 10px'}} type="radio" name="priority" value="2" />2 
            <input checked={todoObj.priority === 3 ? true : false} onChange={onChange} style={{margin:'0 10px 0 10px'}} type="radio" name="priority" value="3" />3
          </div>        

          <Button onClick={onEdit}>EDIT</Button>
          <Button onClick={onDelete}>DELETE</Button>
          <Link to="/todo/list"><Button>CANCEL</Button></Link>
        </>}
      </Container>

      <Footer />
    </>
  );
}

export default TodoEdit;