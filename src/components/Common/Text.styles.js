import styled from 'styled-components/native';
import { fontSizes, colors, margins } from '../../utils/standards';

export const Text = styled.Text((props) => `
  fontSize: ${fontSizes[props.variant?.toUpperCase()] || fontSizes.H4};
  lineHeight: ${props.$lineHeight};
  color: ${colors[props.$color?.toUpperCase()] || colors.PRIMARY_TEXT};
  marginRight: ${margins[props.$margin?.toUpperCase()] || '0px'};
`);

export default {
  Text,
};
