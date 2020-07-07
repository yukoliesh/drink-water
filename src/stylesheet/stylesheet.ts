import styled, { css } from '@xstyled/styled-components';
import { th } from "@xstyled/system";

//Common css 
const displayflex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fullwidth = "100%";
const mediumWidth ="40%";
const largeWidth = "80%";
const bold = "600";
const darkGrey = "#282c34";
const mediumGrey70 ="rgba(0, 0, 0, 0.7)"
const mediumGrey20 ="rgba(0, 0, 0, 0.2)"
const lightGrey = "#e0e0e0";
const white = "#f3f4f6";
const waterBlue = "#2a9cde";
const waterBlue80 = "rgba(42, 156, 222, 0.8)";
const lightBlue30 = "rgba(110, 181, 232, 0.3)"
const submitBlue = "#413CE0";
const goalRed = "#A3005A";

// App component
export const HeaderWrapper = styled.div`
  text-align: center;
`;
export const HeaderCont = styled.div`
  ${displayflex}
  background-color: ${darkGrey};
  min-height: 40vh;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: ${white};
  padding: ${th.space(4)};
`;

export const Heading = styled.h1`
  font-size: ${th.fontSize(68)};
  color: ${waterBlue80};
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
  border: solid 1px ${waterBlue};
  width: ${mediumWidth};
`;

export const WaterWrapperMobile = styled(WaterWrapper)`
  width: ${largeWidth};
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
  font-weight: ${bold};
`;

export const Input = styled.input`
  width: ${mediumWidth};
  padding: ${th.space(3)};
  margin: ${th.space(4)} 0 0;
  box-sizing: border-box;
  font-size: ${th.fontSize(16)};
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
  font-weight: ${bold};
  border: solid 1px ${white};
  border-radius: ${th.radius(4)};
`;

export const SubmitButton = styled(ButtonStyle)`
  background-color: ${submitBlue};
  color: ${white};
`;

export const ResetButton = styled(ButtonStyle)`
  background-color: ${lightGrey};
  color: ${mediumGrey70};
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
  background-color: ${lightBlue30};
  border-radius: ${th.radius(4)};
`;
export const AmountText = styled.span`
  font-size: ${th.fontSize(72)};
  font-weight: ${bold};
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
  border: 1px solid ${lightGrey};
  margin-top: ${th.space(2)};
`;
export const GoalWrapper = styled.div`
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  float: right;
`;
export const GoalCont = styled.div`
  border-radius: ${th.radius(4)}; // 4px
  padding: ${th.space(2)};
  width: ${fullwidth};
  text-align: center;
  font-size: ${th.fontSize(13)};
  font-weight: ${bold};
  background-color: ${goalRed};
  color: ${white};
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
  background-color: ${waterBlue};
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
  background-color: ${white};
  border-radius: ${th.radius(8)};
  padding: ${th.space(4)};
  box-shadow: 3px 3px 3px 3px ${mediumGrey20};
  border: solid 1px ${mediumGrey20};
`;
export const AlertMessageContMobile = styled.div`
  width: 70%;
  z-index: 2;
  align-self: center;
  background-color: ${white};
  border-radius: ${th.radius(8)};
  padding: ${th.space(4)};
  box-shadow: 3px 3px 3px 3px ${mediumGrey20};
  border: solid 1px ${mediumGrey20};
`;
export const AlertHeaderWrapper = styled.header`
  ${displayflex}  
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-bottom: ${th.space(2)};
`;
export const ReminderHeader = styled.span`
  font-size: ${th.fontSize(24)};
  width: ${largeWidth};
`;
export const CloseIconButton = styled.a`
  font-size: ${th.fontSize(24)};
  color: ${mediumGrey70};
  display: inherit;
  cursor: pointer;
  text-decoration: none;

`;
export const CloseButton = styled.input`
  display: inherit;
  padding: 0.8em 3em;
  font-size: ${th.fontSize(16)};
  font-weight: ${bold};
  border: solid 1px ${white};
  border-radius: ${th.radius(4)};
  background-color: ${lightGrey};
  color: ${mediumGrey70};
  margin: ${th.space('auto')};
`;
export const ReminderText = styled.div`
  font-size: ${th.fontSize(18)};
  text-align: center;
  margin: ${th.space(4)} 0;
`;
export const TearDropWrapper = styled.div`
  display: inherit;
  width: 3em;
  margin: ${th.space('auto')};
`;
export const CheckboxWrapper = styled.div`
  ${displayflex}
  margin: ${th.space(4)} ${th.space('auto')};
`;
export const NoReminderCheckbox = styled.input`
  width: ${th.space(4)};
  height: ${th.space(4)};
  margin-right: ${th.space(1)};
`;