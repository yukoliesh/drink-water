import React from 'react';
import styled from '@xstyled/styled-components';
import { isMobileOnly } from "react-device-detect";


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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapperMobile = styled.div`
  width: 100%;
  padding-top: 0.4em;
`;

const ButtonStyle = styled.input`
  padding: 0.8em 3em;
  font-size: 1em;
  font-weight: 600;
  border: solid 1px #fff;
  border-radius: 0.25em;
`;

const SubmitButton = styled(ButtonStyle)`
  background-color: #413CE0;
  color: #fff;
`;

const ResetButton = styled(ButtonStyle)`
  background-color: #F0F0F0;
  color: #4F4F4F;
`;

const SubmitButtonMobile = styled(SubmitButton)`
  width: 100%;
`;
const ResetButtonMobile = styled(ResetButton)`
  width: 100%;
`;
const Cont = styled.div`
  display: block;
  margin: 1em 0.5em;
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
  const handleReset = () => {
    setEnteredAmount(0);
    setTotalAmount(0);
  }
  return (
    <Wrapper>
      <FormCont onSubmit={handleSubmit} onReset={handleReset}>
        <Cont>
          <Label id="amount">Insert your amount you had today.</Label>
        </Cont>
        <Cont>
          <Input type="number" name="amount" id="amountValue" aria-label="water-amount" value={enteredAmount} onChange={handleChange} data-testid="amount-value" />
          <OzText>oz</OzText>
        </Cont>
        {!isMobileOnly && (
          <ButtonWrapper>
            <Cont>
              <SubmitButton
                type="submit"
                value="Submit"
              />
            </Cont>
            <Cont>
              <ResetButton type="reset" value="Reset" data-testid="reset-button" />
            </Cont>
        </ButtonWrapper>
        )}
        {isMobileOnly && (
          <ButtonWrapperMobile>
            <Cont>
              <SubmitButtonMobile
                type="submit"
                value="Submit"
              />
            </Cont>
            <Cont>
              <ResetButtonMobile type="reset" value="Reset" data-testid="reset-button" />
            </Cont>
        </ButtonWrapperMobile>
        )}
        
        <Cont>You entered {enteredAmount} oz.</Cont>
      </FormCont>
    </Wrapper>
  );
};

export default WaterAmount;