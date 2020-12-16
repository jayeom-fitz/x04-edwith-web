import React from "react"
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  color: white;
  background-color: #999999;
`;

function Footer() {
  return (
    <Container>
      <pre>
        Made by Eom
      </pre>
      <pre>
        Project by edwith, www.edwith.org
      </pre>
    </Container>
  );
}

export default Footer;