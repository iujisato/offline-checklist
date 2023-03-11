import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors, paddings } from '../../../utils/standards';

export const Container = styled(SafeAreaView)`
  flex: 1;
  backgroundColor: ${colors.BACKGROUND};
  paddingHorizontal: ${paddings.H1};
`;

export const ScrollContainer = styled(KeyboardAwareScrollView)`
  flex: 1;
  paddingVertical: ${paddings.H1};
`;

export const ButtonWrapper = styled.View`
  justifyContent: center;
  paddingTop: ${paddings.H1}
`;
