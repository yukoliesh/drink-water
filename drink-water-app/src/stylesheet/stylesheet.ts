import styled, { css } from '@xstyled/styled-components';
import { th } from "@xstyled/system";

//Common css 
const displayflex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fullwidth = "100%"

// App component
export const HeaderWrapper = styled.div`
  text-align: center;
`;
export const HeaderCont = styled.div`
  ${displayflex}
  background-color: #282c34;
  min-height: 40vh;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: #f9f7eb;
  padding: ${th.space(4)};
`;

export const Heading = styled.h1`
  font-size: ${th.fontSize(68)};
  color: #6eb5e8;
`;
export const SubHeading = styled.h2`
  font-size: ${th.fontSize(40)};
  margin: 0;
`;

export const WaterWrapper = styled.div`
  align-items: center;
  padding: ${th.space(4)};
  margin: ${th.space(4)} ${th.space('auto')};
  border-radius: ${th.radius(8)};
  border: solid 1px #a7cdeb;
  width: 40%;
`;

export const WaterWrapperMobile = styled(WaterWrapper)`
  width: 80%;
`;

// Water Amount
export const Wrapper = styled.div`
  width: ${fullwidth};
  text-align: center;
`;

export const FormCont = styled.form`
  margin-top: ${th.space(4)};
`;

export const Label = styled.label`
  display: block;
  font-size: ${th.fontSize(24)};
  font-weight: 600;
`;

export const Input = styled.input`
  width: 40%;
  padding: 1em 1.5em;
  margin: 0.25em 0;
  box-sizing: border-box;
`;
export const OzText = styled.span`
  text-align: left;
  font-size: ${th.fontSize(20)};
  padding: ${th.space(2)};
`;

export const ButtonWrapper = styled.div`
  ${displayflex}
`;

export const ButtonWrapperMobile = styled.div`
  width: ${fullwidth};
  padding-top: ${th.space(2)};
`;

export const ButtonStyle = styled.input`
  padding: ${th.space(3)} ${th.space(5)};
  font-size: ${th.fontSize(16)};
  font-weight: 600;
  border: solid 1px #fff;
  border-radius: ${th.radius(4)};
`;

export const SubmitButton = styled(ButtonStyle)`
  background-color: #413CE0;
  color: #fff;
`;

export const ResetButton = styled(ButtonStyle)`
  background-color: #F0F0F0;
  color: #4F4F4F;
`;

export const SubmitButtonMobile = styled(SubmitButton)`
  width: ${fullwidth};
`;
export const ResetButtonMobile = styled(ResetButton)`
  width: ${fullwidth};
`;
export const Cont = styled.div`
  display: block;
  margin: ${th.space(4)} ${th.space(2)};
`;

// Total Amount
export const TotalAmountWrapper = styled.div`
  text-align: center;
  padding: ${th.space(5)};
  background-color: #d6edff;
  border-radius: ${th.radius(4)};
`;
export const AmountText = styled.span`
  font-size: ${th.fontSize(72)};
  font-weight: 600;
`;
export const TotalOzText = styled.span`
  text-align: left;
  font-size: ${th.fontSize(32)};
  padding-left: ${th.space(3)};
`;

// Progress Bar
export const ProgressBarCont = styled.div`
  position: relative;
  height: 15px;
  width: ${fullwidth};
  border-radius: ${th.radius(4)};
  border: 1px solid #e0e0e0;
  margin-top: ${th.space(2)};
`;
export const GoalWrapper = styled.div`
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  float: right;
`;
export const GoalCont = styled.div`
  border-radius: ${th.radius(4)};
  padding: ${th.space(2)};
  width: ${fullwidth};
  text-align: center;
  font-size: ${th.fontSize(13)};
  font-weight: 600;
  background-color: #A3005A;
  color: #fff;
  box-sizing: border-box;
`;
export const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #A3005A;
  margin: ${th.space('auto')};
`;

// Filler
export const FillerItem = styled.div`
  background-color: #21addb;
  height: ${fullwidth};
  border-radius: inherit;
  transition: width .5s ease-in;
  max-width: ${fullwidth};
`;

// Alert Box
export const AlertWrapper = styled.div`
  ${displayflex}  
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

export const AlertMessageCont = styled.div`
  z-index: 2;
  align-self: center;
  width: 30%;
  height: 35%;
  background-color: #fff;
  border-radius: 0.5em;
  padding: 2em;
  box-shadow: 3px 3px 3px 6px #959595;
  border: solid 1px #959595;
`;
export const AlertHeaderWrapper = styled.header`
  ${displayflex}  
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 20%;
`;
export const ReminderHeader = styled.span`
  font-size: 1.5em;
  width: 80%;
`;
export const CloseIconButton = styled.a`
  font-size: 1.5em;
  color: #959595;
  display: inherit;
  cursor: pointer;
  text-decoration: none;

`;
export const CloseButton = styled.input`
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
export const ReminderText = styled.div`
  font-size: 1.1em;
  text-align: center;
  margin: 1em 0;
`;
export const TearDropWrapper = styled.div`
  display: inherit;
  width: 3em;
  margin: auto;
`;
export const CheckboxWrapper = styled.div`
  ${displayflex}
  margin: 1.5em auto;
`;
export const NoReminderCheckbox = styled.input`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
`;