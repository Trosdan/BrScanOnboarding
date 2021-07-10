import React, { useCallback, useMemo, useRef, useState } from 'react';
import Swiper from 'react-native-swiper';

import BottomButton from '../../components/BottomButton';

import DocIconFrenteDocumento from '../../assets/Doc/DocIconFrenteDocumento.png';
import DocIconAcessoCamera from '../../assets/Doc/DocIconAcessoCamera.png';
import DocIconLuz from '../../assets/Doc/DocIconLuz.png';
import DocIconPlastico from '../../assets/Doc/DocIconPlastico.png';
import DocIconFundoEstampado from '../../assets/Doc/DocIconFundoEstampado.png';
import DocIconReflexo from '../../assets/Doc/DocIconReflexo.png';
import DocInicioIcon from '../../assets/Doc/DocInicioIcon.png';
import DocIconTrasDocumento from '../../assets/Doc/DocIconTrasDocumento.png';

import {
  Container,
  ContentContainer,
  Image,
  MainText,
  SubText,
} from './styles';
import Header from '../../components/Header';

export default function Tutorial() {
  const swiperRef = useRef<Swiper>(null);

  const [currentIndexSwiper, setCurrentIndexSwiper] = useState(0);

  const showBackButton = useMemo(
    () => currentIndexSwiper !== 0,
    [currentIndexSwiper]
  );

  const handleNext = useCallback(() => {
    if (currentIndexSwiper < 7) {
      swiperRef.current?.scrollBy(1, true);
    } else {
      // TODO
      // Go to the next page
    }
  }, [currentIndexSwiper]);

  const handlePrevius = useCallback(() => {
    if (currentIndexSwiper > 0) {
      swiperRef.current?.scrollBy(-1, true);
    } else {
      // TODO
      // Go to the next page
    }
  }, [currentIndexSwiper]);

  return (
    <>
      <Header onBackPress={handlePrevius} showBackButton={showBackButton} />
      <Container>
        <Swiper
          ref={swiperRef}
          onIndexChanged={setCurrentIndexSwiper}
          showsButtons={false}
          showsPagination={false}
          scrollEnabled={false}
          loop={false}
        >
          <>
            <ContentContainer>
              <Image source={DocIconFrenteDocumento} />
              <MainText>Vamos lá!</MainText>
              <SubText>Tenha seus documentos em mãos, RG ou CNH.</SubText>
            </ContentContainer>
            <BottomButton text="AVANÇAR" onPress={handleNext} />
          </>

          <>
            <ContentContainer>
              <Image source={DocIconAcessoCamera} />
              <MainText>
                Você precisa liberar o acesso à câmera para fotografar os
                documentos.
              </MainText>
            </ContentContainer>
            <BottomButton text="AUTORIZAR" onPress={handleNext} />
          </>

          <>
            <ContentContainer>
              <Image source={DocIconLuz} />
              <MainText>Escolha um local iluminado</MainText>
              <SubText>
                Posicione seu documento em uma superfície lisa e, de
                preferência, escura.
              </SubText>
            </ContentContainer>
            <BottomButton text="ENTENDI" onPress={handleNext} />
          </>

          <>
            <ContentContainer>
              <Image source={DocIconPlastico} />
              <MainText>Retire o documento do plástico</MainText>
            </ContentContainer>
            <BottomButton text="ENTENDI" onPress={handleNext} />
          </>

          <>
            <ContentContainer>
              <Image source={DocIconFundoEstampado} />
              <MainText>Evite fundos estampados</MainText>
            </ContentContainer>
            <BottomButton text="ENTENDI" onPress={handleNext} />
          </>

          <>
            <ContentContainer>
              <Image source={DocIconReflexo} />
              <MainText>Evite reflexos no documento</MainText>
            </ContentContainer>
            <BottomButton text="ENTENDI" onPress={handleNext} />
          </>

          <>
            <ContentContainer>
              <Image source={DocInicioIcon} />
              <MainText>Fotografe a frente do documento</MainText>
              <SubText>Use o lado que possui sua foto</SubText>
            </ContentContainer>
            <BottomButton text="ENTENDI" onPress={handleNext} />
          </>

          <>
            <ContentContainer>
              <Image source={DocIconTrasDocumento} />
              <MainText>Fotografe a verso do documento</MainText>
              <SubText>Use o lado que não possui foto</SubText>
            </ContentContainer>
            <BottomButton text="ENTENDI" onPress={handleNext} />
          </>
        </Swiper>
      </Container>
    </>
  );
}
