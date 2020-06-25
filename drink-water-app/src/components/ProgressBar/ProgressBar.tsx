import React from 'react';
import styled from '@xstyled/styled-components';
import Filler from './Filler';

const ProgressBarCont = styled.div`
  position: relative;
  height: 15px;
  width: 100%;
  border-radius: 0.25em;
  border: 1px solid #e0e0e0;
  margin: 5px 0 0 0;
`;
const GoalWrapper = styled.div`
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  float: right;
`;
const GoalCont = styled.div`
  border-radius: 0.5em;
  padding: 0.5em;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
  font-weight: 600;
  background-color: #e89613;
  color: #fff;
  box-sizing: border-box;
`;
const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #e89613;
  margin: auto;
`;

export interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage
}: ProgressBarProps): JSX.Element => {

  return (
    <React.Fragment>
      <ProgressBarCont>
        <Filler percentage={percentage} />
      </ProgressBarCont>
      <GoalWrapper>
        <Triangle />
        <GoalCont>64oz!</GoalCont>
      </GoalWrapper>
    </React.Fragment>
  )
}

export default ProgressBar;