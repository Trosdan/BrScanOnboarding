import React, { useCallback } from 'react';
import { NavigationInjectedProps } from 'react-navigation';

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

interface TutorialProps extends NavigationInjectedProps {}

export default function Tutorial({ navigation }: NavigationInjectedProps) {
  const handleSelectTypeDoc = useCallback(() => {
    navigation.navigate('ChoiseSideDoc');
  }, []);

  return (
    <Container>
      <Header light />
      <MainContent>
        <TextWrapper>
          <Text>Selecione o tipo de documento.</Text>
        </TextWrapper>
        <ButtonWrapper>
          <SelectButton
            imageIcon={IconRG}
            text="USAR MEU RG"
            onPress={handleSelectTypeDoc}
          />
          <LineSeparator />
          <SelectButton
            imageIcon={IconCNH}
            text="USAR MINHA CNH"
            onPress={handleSelectTypeDoc}
          />
        </ButtonWrapper>
      </MainContent>
    </Container>
  );
}
