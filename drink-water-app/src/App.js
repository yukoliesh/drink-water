import React from 'react';
import './App.css';
import styled from '@xstyled/styled-components';
import {th} from '@xstyled/system'
import TotalAmount from './components/TotalAmount'
import WaterAmount from './components/WaterAmount';

const HeaderWrapper = styled.div `
  text-align:center;
`;
const HeaderCont = styled.div `
  background-color: #282c34;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #F9F7EB;
  padding-bottom: ${th.space(5)};
`;

const Heading = styled.h1 `
  font-size: 2em;
  color: #6eb5e8;
`;

const App = () => {
  return ( 
    <React.Fragment>
      <HeaderWrapper>
        <HeaderCont>
        <Heading isHeading = {true}> Drink Your Water </Heading>  
        <h2> Stay hydrated.Drink 8 8 - ounces glasses a day. </h2>  
        <p> Click on a drop when you drink water. </p>  
        </HeaderCont>  
      </HeaderWrapper>  
      <TotalAmount />
      <WaterAmount />
    </React.Fragment>
  );
}

export default App;