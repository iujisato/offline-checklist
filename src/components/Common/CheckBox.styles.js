import styled from 'styled-components/native';
import RNCCheckBox from '@react-native-community/checkbox';
import { paddings, margins } from '../../utils/standards';
import CommonText from './Text';

export const Container = styled.View`
  marginBottom: ${margins.H3}
  flexDirection: row;
  paddingHorizontal: ${paddings.H3}
  alignItems: center;
`;

export const CheckBox = styled(RNCCheckBox).attrs({
  boxType: 'square',
  size: 5,
})`
  width: 20px;
  height: 20px;
`;

export const LabelText = styled(CommonText)`
  marginRight: ${margins.H3}
`;
