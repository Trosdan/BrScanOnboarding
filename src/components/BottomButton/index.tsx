import React from 'react';

import { Container, ButtonText } from './styles';

interface HomeProps {
  text: string;
}

export default function Home({ text }: HomeProps) {
  return (
    <Container>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
