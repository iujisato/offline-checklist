import React from 'react';
import {
  Container, InputWrapper, Input, LabelText, ErrorText,
} from './TextInput.styles';

const TextInput = (props) => {
  const { label, error, ...inputProps } = props;

  return (
    <Container>
      <LabelText variant="h5">{label}</LabelText>
      <InputWrapper>
        <Input error={error} {...inputProps} />
      </InputWrapper>

      {error && <ErrorText variant="h5" color="error">{error}</ErrorText>}
    </Container>
  );
};

export default TextInput;
