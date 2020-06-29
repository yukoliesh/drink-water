import React from 'react';
import styled from '@xstyled/styled-components';


const AlertWrapper = styled.div`
  justify-content: center;
  background-color: #0006;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: auto;
  top: 0;
  bottom: 0;
  left: 0;
`;

const AlertMessageCont = styled.div`
  z-index: 2;
  align-self: center;
  width: 30%;
  height: 30%;
  background-color: #fff;
  border-radius: 0.5em;
  padding: 2em;
  box-shadow: 3px 3px 3px 6px #959595;
  border: solid 1px #959595;
`;
const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 20%;
`;
const ReminderHeader = styled.span`
  font-size: 1.5em;
  width: 80%;
`;
const CloseIconButton = styled.a`
  font-size: 1.5em;
  color: #959595;
  display: inherit;
  cursor: pointer;
  text-decoration: none;

`;
const CloseButton = styled.input`
  display: inherit;
  padding: 0.8em 3em;
  font-size: 1em;
  font-weight: 600;
  border: solid 1px #fff;
  border-radius: 0.25em;
  background-color: #e0e0e0;
  color: #666;
  margin: auto;
`;
const ReminderText = styled.div`
  font-size: 1.1em;
  text-align: center;
  margin: 1em 0;
`;
const TearDropWrapper = styled.div`
  display: inherit;
  width: 3em;
  margin: auto;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5em auto;
`;
const NoReminderCheckbox = styled.input`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
`;

export interface AlertBoxProps {
  onCloseClick: () => void;
  onNoReminderClick: () => void;
  modalIsDisplay: string;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  onCloseClick,
  onNoReminderClick,
  modalIsDisplay

}): JSX.Element => {

  return (
    <AlertWrapper style={{display: `${modalIsDisplay}`}}>
      <AlertMessageCont>
        <HeaderWrapper>
          <ReminderHeader>Reminder</ReminderHeader>
          <CloseIconButton href="#" onClick={onCloseClick}>x</CloseIconButton> 
        </HeaderWrapper>
        <TearDropWrapper>
          <svg width="100%" viewBox="0 0 30 42">
            <path fill="#a2dafa" stroke="#2a9cde" strokeWidth="1.5" 
            d="M15 6
            Q 15 6, 25 18
            A 12.8 12.8 0 1 1 5 18
            Q 15 6 15 6z" />
          </svg>
        </TearDropWrapper>
        <ReminderText>Drink your water! Nourish your body! :) </ReminderText>
        <CheckboxWrapper>
         <NoReminderCheckbox type="checkbox" id="no-reminder" name="no-reminder" value="noreminder" onClick={onNoReminderClick} />
         <label htmlFor="no-reminder">Don't reminder me!</label>
        </CheckboxWrapper>
        <CloseButton type="button" value="Close" id="close" onClick={onCloseClick} />
      </AlertMessageCont>
    </AlertWrapper>
  )
}

export default AlertBox;