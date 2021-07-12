import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { RNCamera as ReactNativeCamera } from 'react-native-camera';
import { NavigationInjectedProps } from 'react-navigation';

import BotaoCaptar from '../../assets/Doc/BotaoCaptar.png';
import Header from '../../components/Header';
import { useDoc } from '../../hooks/Doc';

import {
  Container,
  CameraWrapper,
  RNCamera,
  CaptureButton,
  ImageCapture,
} from './styles';

interface PhotoCaptureProps extends NavigationInjectedProps {}

export default function PhotoCapture({ navigation }: PhotoCaptureProps) {
  const rnCameraRef = useRef<ReactNativeCamera>(null);

  const { setImagePath } = useDoc();

  const handleTakePhoto = useCallback(async () => {
    try {
      const data = await rnCameraRef.current?.takePictureAsync({
        quality: 0.5,
      });

      if (!data) throw new Error();

      setImagePath(data.uri);
      navigation.navigate('Success');
    } catch (error) {
      Alert.alert('Não foi possivel capturar a foto.');
    }
  }, [navigation, rnCameraRef]);

  const handleClosePhotoCapture = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Header
        light
        showBackButton={false}
        showCloseButton
        text="Aperte o botão para captar a foto"
        onClosePress={handleClosePhotoCapture}
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
