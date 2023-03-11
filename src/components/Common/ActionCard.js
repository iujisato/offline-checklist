import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container, ContentWrapper, ActionWrapper, ChevronIcon,
} from './ActionCard.styles';

const ActionCard = ({ children, onPress }) => (
  <Container>
    <ContentWrapper>
      {children}
    </ContentWrapper>

    <ActionWrapper>
      <TouchableOpacity onPress={onPress}>
        <ChevronIcon />
      </TouchableOpacity>
    </ActionWrapper>
  </Container>
);

export default ActionCard;
