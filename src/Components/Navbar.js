import React from "react";
import styled from "styled-components";

export default function Navbar() {

  const Hamburger = () =>{
    var burger = document.getElementById('show');
      var links = document.getElementById('links');
      links.style.display='block';
      burger.style.display='none';
   
  }
  const close = () =>{
    var closebtn = document.getElementById('close');
    var links = document.getElementById('links');
    links.style.display='none';
    var burger = document.getElementById('show');
    burger.style.display='block';
  }
  return (
    <Navigation>
      <Logo>Tesla</Logo>
      <MainMenu>
        <ul>
          <li>Modle S</li>
          <li>Modle y</li>
          <li>Modle 3</li>
          <li>Modle x</li>
          <li>Solar Panel</li>
          <li>Solar roof</li>
        </ul>
      </MainMenu>
      <RightMenu>
        <ul>
          <li>Shop</li>
          <li>Account</li>
          <Menu id="show" onClick={Hamburger}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </Menu>
        </ul>
      </RightMenu>
      <HamLinks id="links">
     
      <ul>
      <i className="fa fa-close" id="close" onClick={close} style={{fontSize:'24px'},{color:'black'}}></i>
     
          <li>Modle S</li>
          <li>Modle y</li>
          <li>Modle 3</li>
          <li>Modle x</li>
          <li>Shop</li>
          <li>Solar Panel</li>
          <li>Solar roof</li>
          <li>Cyber Truck</li>
          <li>Custom Order</li>
          <li>Existing Inventory</li>
        </ul>
      </HamLinks>
    </Navigation>
  );
}

const Navigation = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
`;

const Logo = styled.p`
  font-size: 19px;
  font-weight: 800;
`;

const MainMenu = styled.div`
  ul {
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
      display: none;
    }
  }

  ul li {
    padding: 0 0.8em;
  }
`;
const RightMenu = styled.div`

  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin: 0 0.8em;
  }
`;

const Menu = styled.div`
  display:none;
  margin-left:2em;
 
  div {
      width: 35px;
      height: 5px;
      background-color: black;
      margin: 2px 0;
    }
    @media(max-width:768px){
      display:block;
    }
`;

const HamLinks = styled.div`
    position:relative;
    top:8em;
    margin-right:0;
    height:520px;
    width:18em;
    background-color:white;
    overflow:hidden;
    display:none;
   
  
    ul{
      list-style:none;
      margin-top:8em;

    }
    ul .fa{
      margin-left:10em;;
    }
    ul li{
      margin:1em 0;
    }
   
`