import styled from 'styled-components/native';
import ChevronLeft from '../../assets/icons/ArrowLeft';
import { margins, colors } from '../../utils/standards';

export const HeaderContainer = styled.View`
  flexDirection: row;
  justifyContent: space-around;
`;

export const IconContainer = styled.View`
  height: 100px;
  width: 80px;
`;

export const ContentWrapper = styled.View`
  justifyContent: center;
`;

export const ChevronIcon = styled(ChevronLeft).attrs(() => ({
  size: 24,
}))`
  color: ${colors.OFF_BLACK};
  marginLeft: ${margins.H1};
`;
