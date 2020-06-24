import React from 'react';
import styled from '@xstyled/styled-components';


const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const FormCont = styled.form`
  margin-top: 3em;
`;

const Label = styled.label`
  display: block;
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 40%;
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
  setTotalAmount: (e) => void;
}

const WaterAmount: React.FC<WaterAmountProps> = ({
  setTotalAmount
}: WaterAmountProps): JSX.Element => {
  const [enteredAmount, setEnteredAmount] = React.useState(0);
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    return setEnteredAmount(value ? value : e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalAmount((totalAmount: number) => totalAmount + enteredAmount);
  }
  return (
    <Wrapper>
      <FormCont onSubmit={handleSubmit}>
        <Cont>
          <Label id="amount">Insert your amount you had today.</Label>
        </Cont>
        <Cont>
          <Input type="number" name="amount" id="amountValue" value={enteredAmount} onChange={handleChange} />
          <OzText>oz</OzText>
        </Cont>
        <Cont>
          <SubmitButton
            type="submit"
            value="Submit"
          />
        </Cont>
        <Cont>You entered {enteredAmount} oz.</Cont>
      </FormCont>
    </Wrapper>
  );
};

export default WaterAmount;