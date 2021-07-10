import React from 'react';

import { Container, ButtonText } from './styles';

interface HomeProps {
  text: string;
  light?: boolean;
}

export default function Home({ text, light = false }: HomeProps) {
  return (
    <Container light={light}>
      <ButtonText light={light}>{text}</ButtonText>
    </Container>
  );
}
