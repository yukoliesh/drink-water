import React from 'react';
import styled from '@xstyled/styled-components';

const FillerItem = styled.div`
  background-color: #21addb;
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
`;

const Filler = (props) => {
  
  return <FillerItem style={{ width: `${props.percentage}%`}} />
}

export default Filler;