import { useState } from "react";

export const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  }
  const turnOn = () => {
    setIsOn(true);
  }
  const turnOff = () => {
    setIsOn(false);
  }
  const toggleItem: [() => void, () => void, () => void, boolean] = [toggle, turnOn, turnOff, isOn];
  return toggleItem;
}

 

