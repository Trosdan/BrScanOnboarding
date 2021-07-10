import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface HomeProps extends TouchableOpacityProps {
  text: string;
  light?: boolean;
}

export default function BottomButton({
  text,
  light = false,
  ...rest
}: HomeProps) {
  return (
    <Container light={light} {...rest}>
      <ButtonText light={light}>{text}</ButtonText>
    </Container>
  );
}
