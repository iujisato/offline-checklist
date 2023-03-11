import React from 'react';
import Text from './Text';
import { Container } from './DataRow.styles';

const DataRow = ({ label, data }) => (
  <Container>
    <Text variant="h4" $margin="h5" $lineHeight="22px">
      {label}
      :
    </Text>
    <Text variant="h4" $lineHeight="22px">
      {data}
    </Text>
  </Container>
);

export default DataRow;
