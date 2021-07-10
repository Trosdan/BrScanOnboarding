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

export default function ChoiseHowSendPhoto() {
  const handleSelectHowSendPhoto = useCallback(() => {
    // TODO
    // Save the type of doc
  }, []);

  return (
    <Container>
      <Header light />
      <MainContent>
        <TextWrapper>
          <Text>Escolha uma das opções abaixo:</Text>
        </TextWrapper>
        <ButtonWrapper>
          <SelectButton imageIcon={IconRG} text="UPLOAD DO ARQUIVO" light />
          <LineSeparator />
          <SelectButton imageIcon={IconCNH} text="CAPTURA UMA NOVA" light />
        </ButtonWrapper>
      </MainContent>
    </Container>
  );
}
