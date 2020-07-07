import React from "react";
import { isMobileOnly } from "react-device-detect";
import TotalAmount from "./components/TotalAmount";
import WaterAmount from "./components/WaterAmount";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import AlertBox from "./components/AlertBox/AlertBox";
import { HeaderWrapper, HeaderCont, Heading, SubHeading, WaterWrapper, WaterWrapperMobile } from "./stylesheet/stylesheet";
import { useToggle } from "./hooks/use-toggle";



interface AppProps {}

export const App: React.FC<AppProps> = (props): JSX.Element => {
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [, intervalOn, intervalOff, modalIsDisplay] = useToggle();
  // const [modalIsDisplay, setModalIsDisplay] = React.useState(false);
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
      intervalOn();
    }, 60*60*1000);
    // }, 5000);
    if(isNoReminderSet) {clearInterval(interval)};
    return () => clearInterval(interval);
  }, [intervalOn, isNoReminderSet]);

  const onCloseClick = () => {
    intervalOff();
  }
  return (
    <React.Fragment>
      <HeaderWrapper>
        <HeaderCont>
          <Heading aria-label="Drink Your Water"> Drink Your Water </Heading>
          <SubHeading aria-label="Stay hydrated. Drink 8 8-ounce glasses a day.">
            Stay hydrated. Drink 8 8-ounce glasses a day.
          </SubHeading>
          <p aria-label="Enter your amount when you drink water."> Enter your amount when you drink water. </p>
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
