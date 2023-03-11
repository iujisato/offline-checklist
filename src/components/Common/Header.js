import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  HeaderContainer, IconContainer, ContentWrapper, ChevronIcon,
} from './Header.styles';
import MilkControlIcon from '../../assets/icons/MilkControl';
import Text from './Text';

const Header = ({ title, showBackArrow }) => {
  const navigation = useNavigation();

  return (
    <>
      {showBackArrow && (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronIcon />
      </TouchableOpacity>
      )}

      <HeaderContainer>
        <IconContainer>
          <MilkControlIcon />
        </IconContainer>

        <ContentWrapper>
          <Text variant="h1" $color="SCREEN_TITLE">{ title }</Text>
        </ContentWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
