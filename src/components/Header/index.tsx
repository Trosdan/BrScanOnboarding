import React from 'react';

import IconLeft from '../../assets/IconLeft.png';
import IconLeftDark from '../../assets/IconLeftDark.png';

import { Container, ButtonImageLeft, ImageLeft } from './styles';

interface HeaderProps {
  light?: boolean;
  onBackPress?: () => void;
  showBackButton?: boolean;
}

export default function Header({
  light = false,
  onBackPress,
  showBackButton = true,
}: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <ButtonImageLeft onPress={onBackPress}>
          <ImageLeft source={light ? IconLeft : IconLeftDark} />
        </ButtonImageLeft>
      )}
    </Container>
  );
}
