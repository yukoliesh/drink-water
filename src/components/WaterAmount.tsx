import React from 'react';
import { isMobileOnly } from "react-device-detect";
import { Wrapper, FormCont, Label, Input, OzText, ButtonWrapper, ButtonWrapperMobile, SubmitButton, ResetButton, SubmitButtonMobile, ResetButtonMobile, Cont} from "../stylesheet/stylesheet";

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