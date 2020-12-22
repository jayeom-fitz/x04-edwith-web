import React from "react" 
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #505050;
`;

const Logo = styled.div`
  background-image: url('https://ssl.pstatic.net/static/connectfdn/edwith/hold_images/SNS_LOGO_1024x1024.png');
  width: 20%;
  height: 80%;
  margin: 10px 0px 0px 10px;
  background-size: cover;
  background-position: center center;
  float: left;
`;

const Button = styled.button`
  background-color: #388EDF;
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0060BB;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  width: 70%;
  height: 40%;
  margin-top: 25px;
  float: right;
`;

const Li = styled.li`
  width: 12%;
  height: 100%;
  margin-right: 20px;
  float: left;
`;

function Header() {
  return (
    <Container>  
      <Link to="/"><Logo /></Link>

      <Ul>
        <Li><Link to="/todo/list"><Button>TODO</Button></Link></Li>
        <Li><Link to="/book/list"><Button>BOOK</Button></Link></Li>
        <Li><Link to="/c"><Button>C</Button></Link></Li>
        <Li><Link to="/d"><Button>D</Button></Link></Li>
        <Li><Link to="/e"><Button>E</Button></Link></Li>
        <Li><Link to="/f"><Button>F</Button></Link></Li>
      </Ul>
    </Container>
  );
}

export default Header;