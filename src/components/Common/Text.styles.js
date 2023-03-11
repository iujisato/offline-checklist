import styled from 'styled-components/native';
import { fontSizes, colors } from '../../utils/standards';

export const Text = styled.Text((props) => `
  fontSize: ${fontSizes[props.variant?.toUpperCase()] || fontSizes.H4};
  color: ${colors[props.color?.toUpperCase()] || colors.PRIMARY_TEXT};
`);

export default {
  Text,
};
