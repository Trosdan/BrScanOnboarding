import React, { useCallback, useRef } from 'react';
import { RNCamera as ReactNativeCamera } from 'react-native-camera';

import BotaoCaptar from '../../assets/Doc/BotaoCaptar.png';
import Header from '../../components/Header';

import {
  Container,
  CameraWrapper,
  RNCamera,
  CaptureButton,
  ImageCapture,
} from './styles';

export default function PhotoCapture() {
  const rnCameraRef = useRef<ReactNativeCamera>(null);

  const handleTakePhoto = useCallback(async () => {
    const data = await rnCameraRef.current?.takePictureAsync({ quality: 0.5 });
  }, []);

  return (
    <Container>
      <Header
        light
        showBackButton={false}
        showCloseButton
        text="Aperte o botão para captar a foto"
      />
      <CameraWrapper>
        <RNCamera ref={rnCameraRef} type="back" captureAudio={false} />
        <CaptureButton onPress={handleTakePhoto}>
          <ImageCapture source={BotaoCaptar} />
        </CaptureButton>
      </CameraWrapper>
    </Container>
  );
}
