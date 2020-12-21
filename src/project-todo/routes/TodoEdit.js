import React, { useState } from "react";
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
`;

function TodoEdit() {
  const { id } = useParams();
  
  

  return (
    <>
      <Header />
      
      <Container>
       { id }
      </Container>

      <Footer />
    </>
  );
}

export default TodoEdit;