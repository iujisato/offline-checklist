import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, paddings, margins } from '../../../utils/standards';

export const Container = styled(SafeAreaView)`
  flex: 1;
  backgroundColor: ${colors.BACKGROUND};
  paddingHorizontal: ${paddings.H1};
`;

export const DetailsContainer = styled.View`
  flex: 1;
  backgroundColor: ${colors.SECONDARY_BACKGROUND};
  padding: ${paddings.H1};
  borderRadius: 6px;
  marginVertical: ${margins.H1};
`;

export const ButtonWrapper = styled.View`
  justifyContent: center;
  paddingTop: ${paddings.H5}
`;
