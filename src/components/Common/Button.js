import React from 'react';
import { Container, ButtonText } from './Button.styles';

const CustomButton = ({ disabled, title, onPress }) => (
  <Container $disabled={disabled} onPress={onPress}>
    <ButtonText variant="h4" $disabled={disabled}>{title}</ButtonText>
  </Container>
);

export default CustomButton;
