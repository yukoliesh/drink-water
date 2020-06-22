import React from 'react';
import { th } from '@xstyled/system';
import styled from '@xstyled/styled-components';

const TotalAmountWrapper = styled.div`
  text-align: center;
  padding: ${th.space(5)};
  background-color: #d6edff;
`;
const AmountText = styled.span`
  font-size: ${th.fontSize(72)};
  font-weight: 600;
`;
const OzText = styled.span`
  text-align: left;
  font-size: ${th.fontSize(32)};
  padding-left: ${th.space(3)};
`;

export interface TotalAmountProps {
  enteredAmount: number;
}

const TotalAmount: React.FC<TotalAmountProps> = ({
  enteredAmount
}: TotalAmountProps): JSX.Element => {
  return (
    <TotalAmountWrapper>
      <AmountText>{enteredAmount}</AmountText>
      <OzText>oz</OzText>
    </TotalAmountWrapper>
  );
};

export default TotalAmount;
