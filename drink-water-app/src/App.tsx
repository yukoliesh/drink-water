import React from "react";
import { isMobileOnly } from "react-device-detect";
import TotalAmount from "./components/TotalAmount";
import WaterAmount from "./components/WaterAmount";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import AlertBox from "./components/AlertBox/AlertBox";
import { HeaderWrapper, HeaderCont, Heading, SubHeading, WaterWrapper, WaterWrapperMobile } from "./stylesheet/stylesheet";



interface AppProps {}

export const App: React.FC<AppProps> = (props): JSX.Element => {
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [modalIsDisplay, setModalIsDisplay] = React.useState(false);
  const [isNoReminderSet, setIsNoReminderSet] = React.useState(false);

  const handlePercentage = () => {
    const value = ((totalAmount / 64) * 100).toFixed(2);
    const fixedValue = parseInt(value, 10);
    return fixedValue;
  };

  const onNoReminderChecked = () => {
    setIsNoReminderSet(true);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setModalIsDisplay(true);
    }, 60*60*1000);
    if(isNoReminderSet) {clearInterval(interval)};
    return () => clearInterval(interval);
  }, [modalIsDisplay, isNoReminderSet]);

  const onCloseClick = () => {
    setModalIsDisplay(false);
  }

  

  return (
    <React.Fragment>
      <HeaderWrapper>
        <HeaderCont>
          <Heading> Drink Your Water </Heading>
          <SubHeading>
            Stay hydrated. Drink 8 8-ounce glasses a day.
          </SubHeading>
          <p> Enter your amount when you drink water. </p>
        </HeaderCont>
      </HeaderWrapper>
      {!isMobileOnly && (<WaterWrapper>
        <TotalAmount totalAmount={totalAmount} />
        <ProgressBar percentage={handlePercentage()} />
        <WaterAmount setTotalAmount={setTotalAmount} />
      </WaterWrapper>)}
      {isMobileOnly && (
        <WaterWrapperMobile>
          <TotalAmount totalAmount={totalAmount} />
          <ProgressBar percentage={handlePercentage()} />
          <WaterAmount setTotalAmount={setTotalAmount} />
        </WaterWrapperMobile>
      )}
      {modalIsDisplay && <AlertBox 
        onCloseClick={onCloseClick} 
        onNoReminderClick={onNoReminderChecked}
        emojiLabel={"Smile"}
        emojiSymbol={'😀'} />}
    </React.Fragment>
  );
};

export default App;
