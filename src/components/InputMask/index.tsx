import React from 'react';
import { TextInputMaskProps } from 'react-native-masked-text';

import { Container, Label, TextInput } from './styles';

type InputProps = TextInputMaskProps;

export default function InputMask({ ...rest }: InputProps) {
  return (
    <Container>
      <Label>CPF</Label>
      <TextInput {...rest} />
    </Container>
  );
}
