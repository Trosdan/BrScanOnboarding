import React, { useCallback } from 'react';

import {
  Container,
  MainContent,
  TextWrapper,
  Text,
  ButtonWrapper,
} from './styles';

import IconRG from '../../assets/Doc/IconRG.png';
import IconCNH from '../../assets/Doc/IconCNH.png';

import Header from '../../components/Header';
import { SelectButton } from '../../components/SelectButton';
import LineSeparator from '../../components/LineSeparator';

export default function Tutorial() {
  const handleSelectTypeDoc = useCallback(() => {
    // TODO
    // Save the type of doc
  }, []);

  return (
    <Container>
      <Header light />
      <MainContent>
        <TextWrapper>
          <Text>Selecione o tipo de documento.</Text>
        </TextWrapper>
        <ButtonWrapper>
          <SelectButton imageIcon={IconRG} text="USAR MEU RG" />
          <LineSeparator />
          <SelectButton imageIcon={IconCNH} text="USAR MINHA CNH" />
        </ButtonWrapper>
      </MainContent>
    </Container>
  );
}
