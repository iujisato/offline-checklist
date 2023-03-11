import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors, paddings } from '../../../utils/standards';

export const Container = styled(SafeAreaView)`
  flex: 1;
  backgroundColor: ${colors.BACKGROUND};
`;

export const ScrollContainer = styled(KeyboardAwareScrollView)`
  flex: 1;
  padding: ${paddings.H1};
`;
