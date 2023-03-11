import styled from 'styled-components/native';

import { colors, paddings } from '../../utils/standards';

export const Container = styled.View`
  flex: 1
  backgroundColor: ${colors.SECONDARY_BACKGROUND};
  padding: ${paddings.H1};
  justifyContent: center;
  alignItems: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(() => ({
  size: 'large',
  color: colors.LOADING,
}))``;
