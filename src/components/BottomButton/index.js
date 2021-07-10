import React from 'react';

import { Container, ButtonText } from './styles';

export default function Home({ text }) {
  return (
    <Container>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
