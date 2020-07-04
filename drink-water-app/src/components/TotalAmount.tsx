import React from 'react';
import { th } from '@xstyled/system';
import styled from '@xstyled/styled-components';

const TotalAmountWrapper = styled.div`
  text-align: center;
  padding: ${th.space(5)};
  background-color: #d6edff;
  border-radius: 0.25em;
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
  totalAmount: number;
}

const TotalAmount: React.FC<TotalAmountProps> = ({
  totalAmount
}: TotalAmountProps): JSX.Element => {
 
  return (
      <TotalAmountWrapper>
        <AmountText>{totalAmount}</AmountText>
        <OzText>oz</OzText>
      </TotalAmountWrapper>
  );
};

export default TotalAmount;
