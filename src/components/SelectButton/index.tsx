import React from 'react';
import { ImageProps } from 'react-native';

import { Container, ImageIcon, Text } from './styles';

interface SelectButtonProps {
  imageIcon: ImageProps;
  text: string;
  light?: boolean;
}

export function SelectButton({
  imageIcon,
  text,
  light = false,
}: SelectButtonProps) {
  return (
    <Container light={light}>
      <ImageIcon source={imageIcon} />
      <Text light={light}>{text}</Text>
    </Container>
  );
}
