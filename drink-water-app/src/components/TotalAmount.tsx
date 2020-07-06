import React from 'react';
import { TotalAmountWrapper, AmountText, TotalOzText} from "../stylesheet/stylesheet";

export interface TotalAmountProps {
  totalAmount: number;
}

const TotalAmount: React.FC<TotalAmountProps> = ({
  totalAmount
}: TotalAmountProps): JSX.Element => {
 
  return (
      <TotalAmountWrapper>
        <AmountText>{totalAmount}</AmountText>
        <TotalOzText>oz</TotalOzText>
      </TotalAmountWrapper>
  );
};

export default TotalAmount;
