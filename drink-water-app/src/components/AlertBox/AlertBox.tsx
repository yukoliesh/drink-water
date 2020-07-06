import React from 'react';
import { AlertWrapper, AlertMessageCont, AlertHeaderWrapper, ReminderHeader, CloseIconButton, CloseButton, ReminderText, TearDropWrapper, CheckboxWrapper, NoReminderCheckbox } from "../../stylesheet/stylesheet";


export interface AlertBoxProps {
  onCloseClick: () => void;
  onNoReminderClick: () => void;
  emojiLabel: string;
  emojiSymbol: string;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  onCloseClick,
  onNoReminderClick,
  emojiLabel,
  emojiSymbol

}): JSX.Element => {

  return (
    <AlertWrapper>
      <AlertMessageCont>
        <AlertHeaderWrapper>
          <ReminderHeader>Reminder</ReminderHeader>
          <CloseIconButton href="#" onClick={onCloseClick}>x</CloseIconButton> 
        </AlertHeaderWrapper>
        <TearDropWrapper>
          <svg width="100%" viewBox="0 0 30 42">
            <path fill="#a2dafa" stroke="#2a9cde" strokeWidth="1.5" 
            d="M15 6
            Q 15 6, 25 18
            A 12.8 12.8 0 1 1 5 18
            Q 15 6 15 6z" />
          </svg>
        </TearDropWrapper>
        <ReminderText>
          Drink your water! <br /> Nourish your body!
          <span role="img" aria-label={emojiLabel ? emojiLabel : ""}>
            {emojiSymbol}
          </span>  
        </ReminderText>
        <CheckboxWrapper>
         <NoReminderCheckbox type="checkbox" id="no-reminder" data-testid="noreminder-checkbox" name="no-reminder" value="noreminder" onClick={onNoReminderClick} />
         <label htmlFor="no-reminder">Don't reminder me!</label>
        </CheckboxWrapper>
        <CloseButton type="button" value="Close" id="close" data-testid="close-button" onClick={onCloseClick} />
      </AlertMessageCont>
    </AlertWrapper>
  )
}

export default AlertBox;