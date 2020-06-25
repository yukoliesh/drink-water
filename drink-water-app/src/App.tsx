import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system'
import TotalAmount from './components/TotalAmount'
import WaterAmount from './components/WaterAmount';
import ProgressBar from './components/ProgressBar/ProgressBar';
import AlertBox from './components/AlertBox/AlertBox';

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
  font-size: ${th.fontSize(68)};
  color: #6eb5e8;
`;
const SubHeading = styled.h2`
  font-size: ${th.fontSize(40)};
  margin: 0;
`;

const WaterWrapper = styled.div`
  align-items: center;
  padding: 1em;
  margin: 2em auto;
  border-radius: 0.5em;
  border: solid 1px #a7cdeb;
  width: 40%;

`;

interface AppProps {

}

export const App: React.FC<AppProps> = (props): JSX.Element => {
  const [totalAmount, setTotalAmount] = React.useState(0);
  
  const handlePercentage = () => {
    const value = (totalAmount / 64 * 100).toFixed(2);
    const fixedValue = parseInt(value, 10);
    return fixedValue;
  }

  return ( 
    <React.Fragment>
      <HeaderWrapper>
        <HeaderCont>
        <Heading> Drink Your Water </Heading>  
        <SubHeading> Stay hydrated. Drink 8 8-ounce glasses a day. </SubHeading>  
        <p> Enter your amount when you drink water. </p>  
        </HeaderCont>  
      </HeaderWrapper>  
      <WaterWrapper>
        <TotalAmount totalAmount={totalAmount} />
        <ProgressBar percentage={handlePercentage()} />
        <WaterAmount setTotalAmount={setTotalAmount} />
      </WaterWrapper>
      <AlertBox />
    </React.Fragment>
  );
}

export default App;