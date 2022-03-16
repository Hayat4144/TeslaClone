import React from "react";
import styled from "styled-components";
export default function Section(props) {
  return (
    <Wrap style={{backgroundImage:`url('${props.bgImg}')`}}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <ButtonGroup>
        <Leftbtn>{props.Leftbtn}</Leftbtn>
        <Righttbtn>{props.Rightbtn}</Righttbtn>
      </ButtonGroup>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100 vw;
  height: 100vh;
  background-position: center;
  overflow:hidden;
  backgoround-repeate: no-repeat;
  background-size: cover;
  justify:content:space-around;
`;

const ItemText = styled.div`
  padding-top: 14vh;
  text-align: center;
  text-transform: capitalize;
  h1 {
    padding-buttom: 0;
  }
`;

const ButtonGroup = styled.div`
  position: relative;
  top: 33%;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 768px) {
  flex-direction:column;
  
  }
`;

const Leftbtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width:12em;
  color:white;
  text-align:center;
  border-radius:24px ;
  padding:0.6em 1.5em;
  margin-right:1em;
  font-size: 14px;
}
 
`;
const Righttbtn = styled.div`
background-color: white;
color:black;
width:12em;
text-align:center;
border-radius:24px ;
margin-top:1em;
padding:0.6em 1.5em;
font-size: 14px;
}
`;
