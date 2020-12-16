import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  top: 0;  
  padding-top: 100px;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
  margin-top: -150px;
  background-color: #888888;
`;

const Text = styled.h1`
  margin: 125px 110px;
`;

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Text>Hello</Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Home;