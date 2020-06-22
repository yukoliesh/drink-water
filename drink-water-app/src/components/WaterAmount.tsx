import React from 'react';
import styled from '@xstyled/styled-components';


const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 50%;
  padding: 1em 1.5em;
  margin: 0.25em 0;
  box-sizing: border-box;
`;

const OzText = styled.span`
  text-align: left;
  font-size: 1em;
  padding: 0.5em;
`;

const SubmitButton = styled.input`
  padding: 0.8em 3em;
  background-color: #21addb;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  border: solid 1px #fff;
  border-radius: 0.25em;
`;

const Cont = styled.div`
  display: block;
  margin: 1em;
`;

export interface WaterAmountProps {
  enteredAmount: number;
  onSubmitAmountClick: (e) => void;
}

const WaterAmount: React.FC<WaterAmountProps> = ({
  enteredAmount,
  onSubmitAmountClick
}: WaterAmountProps): JSX.Element => {
  

  return (
    <Wrapper>
      <form>
        <Cont>
          <Label id="amount">Insert your amount you had </Label>
        </Cont>
        <Cont>
          <Input type="text" name="amount" id="amountValue" />
          <OzText>oz</OzText>
        </Cont>
        <Cont>
          <SubmitButton
            type="submit"
            value="Submit"
            onClick={onSubmitAmountClick}
          />
        </Cont>
        <Cont>You entered {enteredAmount} oz.</Cont>
      </form>
    </Wrapper>
  );
};

export default WaterAmount;
