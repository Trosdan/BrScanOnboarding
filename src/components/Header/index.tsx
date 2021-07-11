import React, { useCallback } from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import IconLeft from '../../assets/IconLeft.png';
import IconLeftDark from '../../assets/IconLeftDark.png';

import IconClose from '../../assets/Doc/IconClose.png';
import IconCloseDark from '../../assets/Doc/IconCloseDark.png';

import { Container, ButtonImageLeft, Text, ImageLeft } from './styles';

interface HeaderProps extends NavigationInjectedProps {
  light?: boolean;
  onBackPress?: () => void;
  showBackButton?: boolean;
  text?: string;
  onClosePress?: () => void;
  showCloseButton?: boolean;
}

function Header({
  light = false,
  onBackPress,
  showBackButton = true,
  text = '',
  onClosePress,
  showCloseButton = false,
  navigation,
}: HeaderProps) {
  const handleGoBack = useCallback(() => {
    if (typeof onBackPress === 'undefined') navigation.goBack();
    else onBackPress();
  }, [onBackPress, navigation]);

  return (
    <Container>
      {showBackButton && (
        <ButtonImageLeft onPress={handleGoBack}>
          <ImageLeft source={light ? IconLeft : IconLeftDark} />
        </ButtonImageLeft>
      )}
      <Text light={light}>{text}</Text>
      {showCloseButton && (
        <ButtonImageLeft onPress={onClosePress}>
          <ImageLeft source={light ? IconClose : IconCloseDark} />
        </ButtonImageLeft>
      )}
    </Container>
  );
}

export default withNavigation(Header);
