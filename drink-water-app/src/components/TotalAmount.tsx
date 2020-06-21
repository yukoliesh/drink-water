import React from 'react';
import { th } from '@xstyled/system';
import styled from '@xstyled/styled-components';

const TotalAmountWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: ${th.space(5)};
`;
const AmountText = styled.span`
  font-size: ${th.fontSize(72)};
`;
const OzText = styled.span`
  text-align: left;
  font-size: ${th.fontSize(32)};
  padding-left: ${th.space(3)};
`;

export interface TotalAmountProps {
  enteredAmount: number;
}

const TotalAmount: React.FC<TotalAmountProps> = (
  TotalAmountProps
): JSX.Element => {
  return (
    <TotalAmountWrapper>
      <AmountText>8</AmountText>
      <OzText>oz</OzText>
    </TotalAmountWrapper>
  );
};

export default TotalAmount;
