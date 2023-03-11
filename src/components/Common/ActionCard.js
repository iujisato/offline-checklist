import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container, ContentWrapper, ActionWrapper, ChevronIcon,
} from './ActionCard.styles';

const ActionCard = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <ContentWrapper>
        {children}
      </ContentWrapper>

      <ActionWrapper>
        <ChevronIcon />
      </ActionWrapper>
    </Container>
  </TouchableOpacity>
);

export default ActionCard;
