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
import { useDoc } from '../../hooks/Doc';

interface TutorialProps extends NavigationInjectedProps {}

export default function Tutorial({ navigation }: TutorialProps) {
  const { setTypeDoc } = useDoc();

  const handleSelectTypeDoc = useCallback(
    (typeDoc: 'RG' | 'CNH') => {
      setTypeDoc(typeDoc);
      navigation.navigate('ChoiseSideDoc');
    },
    [navigation, setTypeDoc]
  );

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
            onPress={() => handleSelectTypeDoc('RG')}
          />
          <LineSeparator />
          <SelectButton
            imageIcon={IconCNH}
            text="USAR MINHA CNH"
            onPress={() => handleSelectTypeDoc('CNH')}
          />
        </ButtonWrapper>
      </MainContent>
    </Container>
  );
}
