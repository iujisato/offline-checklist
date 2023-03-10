import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  backgroundColor: ${colors.BACKGROUND};
`;

export default {
  Container,
};
