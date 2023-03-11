import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import TextInput from './TextInput';

const CustomPicker = ({
  value, onChange, data, label, error, onBlur, onFocus,
}) => (
  <ModalSelector
    data={data}
    initValue={value.label}
    onChange={onChange}
  >
    <TextInput
      label={label}
      error={error}
      value={value.label}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  </ModalSelector>
);

export default CustomPicker;
