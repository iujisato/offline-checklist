import styled from 'styled-components/native';
import Text from './Text';
import { colors, paddings } from '../../utils/standards';

export const Container = styled.TouchableOpacity(({ $disabled }) => `
  borderRadius: 10px;
  backgroundColor: ${$disabled ? colors.DISABLED_BACKGROUND : colors.BUTTON_ACTIVE_BACKGROUND};
  alignSelf: center;
  justifyContent: center;
  alignItems: center;
  padding: ${paddings.H1};
  minWidth: 50%;
`);

export const ButtonText = styled(Text)(({ $disabled }) => `
  alignSelf: center;
  color: ${$disabled ? colors.DISABLED_TEXT : colors.BUTTON_ACTIVE_TEXT};
`);
