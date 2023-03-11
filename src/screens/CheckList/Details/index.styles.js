import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, paddings } from '../../../utils/standards';

export const Container = styled(SafeAreaView)`
  flex: 1;
  backgroundColor: ${colors.BACKGROUND};
  padding: ${paddings.H1};
  justifyContent: space-between;
`;

export default {
  Container,
};
