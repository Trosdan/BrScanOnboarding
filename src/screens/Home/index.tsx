import React from 'react';

import IconHome from '../../assets/IconHomeDark.png';
import BottomButton from '../../components/BottomButton';

import {
  Container,
  ContentWrapper,
  ImageHome,
  MainText,
  SubText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <ImageHome source={IconHome} />
        <MainText>BrSafe</MainText>
        <SubText>Bioface</SubText>
      </ContentWrapper>
      <BottomButton text="INICIAR" />
    </Container>
  );
}
