import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  top: 0;  
  padding-top: 100px;
`;

function Todo() {
  return (
    <>
      <Header />
      <Container>
        Project A
      </Container>
      <Footer />
    </>
  );
}

export default Todo;