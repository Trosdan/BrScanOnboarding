import React, { useCallback } from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import IconHome from '../../assets/IconHomeDark.png';
import BottomButton from '../../components/BottomButton';

import {
  Container,
  ContentWrapper,
  ImageHome,
  MainText,
  SubText,
} from './styles';

interface HomeProps extends NavigationInjectedProps {}

export default function Home({ navigation }: HomeProps) {
  const handleStart = useCallback(() => {
    navigation.navigate('Indexing');
  }, [navigation]);

  return (
    <Container>
      <ContentWrapper>
        <ImageHome source={IconHome} />
        <MainText>BrSafe</MainText>
        <SubText>Bioface</SubText>
      </ContentWrapper>
      <BottomButton text="INICIAR" onPress={handleStart} />
    </Container>
  );
}
