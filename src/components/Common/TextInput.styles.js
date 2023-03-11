import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';
import { colors, paddings, margins } from '../../utils/standards';
import CommonText from './Text';

export const Container = styled.View`
  marginBottom: ${margins.H3}
`;

export const Input = styled(MaskInput)(({ error }) => `
  flex: 1;
  paddingVertical: ${paddings.H4};
  paddingHorizontal: ${paddings.H3};
  borderRadius: 4px;
  backgroundColor: ${error ? colors.ERROR_BACKGROUND : colors.SECONDARY_BACKGROUND};
`);

export const InputWrapper = styled.View`
  flexDirection: row;
  paddingHorizontal: ${paddings.H3}
`;

export const LabelText = styled(CommonText)`
  paddingLeft: ${paddings.H3}
  marginBottom: ${margins.H5}

`;

export const ErrorText = styled(CommonText)`
  paddingLeft: ${paddings.H3}
`;
