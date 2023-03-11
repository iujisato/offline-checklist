import styled from 'styled-components/native';

import ChevronRight from '../../assets/icons/ChevronRight';
import { colors, paddings, margins } from '../../utils/standards';

export const Container = styled.View((props) => `
  backgroundColor: ${colors[props.color] || colors.SECONDARY_BACKGROUND};
  padding: ${paddings[props.variant?.toUpperCase()] || paddings.H1};
  borderRadius: 6px;
  marginVertical: ${margins.H4};
  flexDirection : row;
`);

export const ContentWrapper = styled.View`
  flex: 1;
`;

export const ActionWrapper = styled.View`
  justifyContent: center;
`;

export const ChevronIcon = styled(ChevronRight).attrs(() => ({
  size: 20,
}))`
  color: ${colors.ICON_PRIMARY};
`;
