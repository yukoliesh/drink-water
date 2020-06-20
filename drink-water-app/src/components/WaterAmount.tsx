import React from 'react';
import styled, { Box } from '@xstyled/styled-components'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Label = styled.label`
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
  padding: 0.5em;;
`;

const SubmitButton = styled.input`
  padding: 0.8em 3em;
  background-color: ${({ theme: { colors } }) => colors.waterBlue};
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  border: solid 1px #fff;
  border-radius: 0.25em;
`;

export interface WaterAmountProps {
  enteredAmount: string;
}

const WaterAmount: React.FC<WaterAmountProps> = ({
}: WaterAmountProps): JSX.Element => {
  const [enteredAmount, setEnteredAmount] = React.useState("");
  const onSubmitAmountClick = (e) => {
    e.preventDefault();
    const inputValue = (document.getElementById("amountValue") as HTMLInputElement).value;
    setEnteredAmount(inputValue);
    console.log('clicked!', inputValue);
  }
  console.log("value", enteredAmount);
 
  return (
    <Wrapper>
      <form>
        <Box row id="water">
          <Box col p={16}>
           <Label id="amount">Insert your amount you had </Label>
          </Box> 
        </Box>
        <Box row>
          <Box col={2 / 3} p={16}>
            <Input type="text" name="amount" id="amountValue" />  
            <OzText>oz</OzText>
          </Box>
          <Box col={1 / 3} p={16}>
            <SubmitButton type="submit" value="Submit" onClick={onSubmitAmountClick} />
          </Box>  
        </Box>
        <Box row>
          You entered {enteredAmount} oz.
        </Box>
      </form>
    </Wrapper>
  );
}

export default WaterAmount;
