import React from 'react';
import Filler from './Filler';
import { ProgressBarCont, GoalWrapper, GoalCont, Triangle } from "../../stylesheet/stylesheet";



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
        <GoalCont>Goal!</GoalCont>
      </GoalWrapper>
    </React.Fragment>
  )
}

export default ProgressBar;