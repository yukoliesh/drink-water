import React from 'react';
import styled from '@xstyled/styled-components';

const FillerItem = styled.div`
  background-color: #21addb;
  height: 100%;
  border-radius: inherit;
  transition: width .5s ease-in;
  max-width: 100%;
`;

const Filler = (props) => {
  
  return <FillerItem style={{ width: `${props.percentage}%`}} />
}

export default Filler;