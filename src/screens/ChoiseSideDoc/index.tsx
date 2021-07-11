import React, { useCallback, useState } from 'react';
import { ImageProps } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import Header from '../../components/Header';

import IconRGFrente from '../../assets/Doc/IconRGFrente.png';
import IconRGVerso from '../../assets/Doc/IconRGVerso.png';
import IconRGFrenteVerso from '../../assets/Doc/IconRGFrenteVerso.png';

import IconCNHFrente from '../../assets/Doc/IconCNHFrente.png';
import IconCNHVerso from '../../assets/Doc/IconCNHVerso.png';
import IconCNHFrenteVerso from '../../assets/Doc/IconCNHFrenteVerso.png';

import {
  Container,
  MainContent,
  TextWrapper,
  Text,
  ButtonWrapper,
} from './styles';
import { SelectButton } from '../../components/SelectButton';
import LineSeparator from '../../components/LineSeparator';

interface ITypeDoc {
  iconFrente: ImageProps;
  iconVerso: ImageProps;
  iconFrenteVerso: ImageProps;
  text: string;
}

interface ChoiseSideDocProps extends NavigationInjectedProps {}

const typeDocData = {
  RG: {
    iconFrente: IconRGFrente,
    iconVerso: IconRGVerso,
    iconFrenteVerso: IconRGFrenteVerso,
    text: 'Escolha como quer enviar o seu RG.',
  },
  CNH: {
    iconFrente: IconCNHFrente,
    iconVerso: IconCNHVerso,
    iconFrenteVerso: IconCNHFrenteVerso,
    text: 'Escolha como quer enviar a sua CNH.',
  },
};

export default function ChoiseSideDoc({ navigation }: ChoiseSideDocProps) {
  const [typeDoc] = useState<ITypeDoc>(() => typeDocData['RG']);

  const handleSelectSideDoc = useCallback(() => {
    navigation.navigate('ChoiseHowSendPhoto');
  }, [navigation]);

  return (
    <Container>
      <Header light />
      <MainContent>
        <TextWrapper>
          <Text>{typeDoc.text}</Text>
        </TextWrapper>
        <ButtonWrapper>
          <SelectButton
            imageIcon={typeDoc.iconFrente}
            text="FOTO DA FRENTE"
            onPress={handleSelectSideDoc}
          />
          <LineSeparator />
          <SelectButton
            imageIcon={typeDoc.iconVerso}
            text="FOTO DO VERSO"
            onPress={handleSelectSideDoc}
          />
          <LineSeparator />
          <SelectButton
            imageIcon={typeDoc.iconFrenteVerso}
            text="FRENTE E VERSO"
            onPress={handleSelectSideDoc}
          />
        </ButtonWrapper>
      </MainContent>
    </Container>
  );
}
