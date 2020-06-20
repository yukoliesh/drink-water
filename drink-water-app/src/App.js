import React from 'react';
import './App.css';
import Theme from "./Theme";
import styled, { Box } from '@xstyled/styled-components';
import { th } from '@xstyled/system'
import TotalAmount from './components/TotalAmount';
import WaterAmount from './components/WaterAmount';

const HeaderWrapper = styled.div`
  text-align:center;
`;
const HeaderCont = styled.div`
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme: { colors } }) => colors.powderWhite};
  padding-bottom: ${th.space(5)};
`; 

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.waterBlue};
`;

const App = () => {
  return (
    <Theme>
      <HeaderWrapper>
        <HeaderCont>
          <Heading isHeading={true}>Drink Your Water</Heading>
          <h2>Stay hydrated. Drink 8 8-ounces glasses a day.</h2>
          <p>Click on a drop when you drink water.</p>
        </HeaderCont>
      </HeaderWrapper>
      <Box row>
        <Box col>
          <TotalAmount />
        </Box>
        <Box col>
          <WaterAmount />
        </Box>
      </Box>
    </Theme>
    );
}

export default App;
