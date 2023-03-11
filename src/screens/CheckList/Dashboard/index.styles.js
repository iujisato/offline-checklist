import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, paddings } from '../../../utils/standards';

export const Container = styled(SafeAreaView)`
  flex: 1;
  backgroundColor: ${colors.BACKGROUND};
  paddingHorizontal: ${paddings.H1};
  paddingTop: ${paddings.H1};
`;

export const ButtonWrapper = styled.View`
  justifyContent: center;
  paddingTop: ${paddings.H1}
`;
