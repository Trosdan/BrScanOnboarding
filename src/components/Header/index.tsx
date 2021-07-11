import React from 'react';

import IconLeft from '../../assets/IconLeft.png';
import IconLeftDark from '../../assets/IconLeftDark.png';

import IconClose from '../../assets/Doc/IconClose.png';
import IconCloseDark from '../../assets/Doc/IconCloseDark.png';

import { Container, ButtonImageLeft, Text, ImageLeft } from './styles';

interface HeaderProps {
  light?: boolean;
  onBackPress?: () => void;
  showBackButton?: boolean;
  text?: string;
  onClosePress?: () => void;
  showCloseButton?: boolean;
}

export default function Header({
  light = false,
  onBackPress,
  showBackButton = true,
  text = '',
  onClosePress,
  showCloseButton = false,
}: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <ButtonImageLeft onPress={onBackPress}>
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
