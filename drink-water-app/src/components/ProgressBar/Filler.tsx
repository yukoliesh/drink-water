import React from 'react';
import { FillerItem } from "../../stylesheet/stylesheet";


const Filler = (props) => {
  
  return <FillerItem style={{ width: `${props.percentage}%`}} />
}

export default Filler;