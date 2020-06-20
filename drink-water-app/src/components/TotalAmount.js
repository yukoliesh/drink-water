import React from 'react';
import { th } from '@xstyled/system'
import styled, { Box } from '@xstyled/styled-components'

const TotalAmountWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: ${th.space(5)};
`;
const AmountText = styled.div`
  text-align: right;
  font-size: ${th.fontSize(72)};
`;
const OzText = styled.div`
  text-align: left;
  font-size: ${th.fontSize(32)};
  padding-left: ${th.space(3)};
`;

const TotalAmount = () => {
  return (
    <TotalAmountWrapper>
      <Box row>
        <Box col>
        <AmountText>8</AmountText>
        </Box>
        <Box col verticalAlign="bottom">
         <OzText>oz</OzText>
        </Box>
      </Box>
    </TotalAmountWrapper>
  );
}

export default TotalAmount;
