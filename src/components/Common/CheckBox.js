import React from 'react';
import { Container, CheckBox, LabelText } from './CheckBox.styles';

const CheckBoxInput = (props) => {
  const { label, ...checkBoxProps } = props;

  return (
    <Container>
      <LabelText variant="h5">{label}</LabelText>
      <CheckBox {...checkBoxProps} />
    </Container>
  );
};

export default CheckBoxInput;
