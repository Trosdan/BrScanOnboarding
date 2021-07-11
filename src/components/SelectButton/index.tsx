import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';

import { Container, ImageIcon, Text } from './styles';

interface SelectButtonProps extends TouchableOpacityProps {
  imageIcon: ImageProps;
  text: string;
  light?: boolean;
}

export function SelectButton({
  imageIcon,
  text,
  light = false,
  ...rest
}: SelectButtonProps) {
  return (
    <Container light={light} {...rest}>
      <ImageIcon source={imageIcon} />
      <Text light={light}>{text}</Text>
    </Container>
  );
}
