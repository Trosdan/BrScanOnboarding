import styled from 'styled-components/native';
import { RNCamera as ReactNativeCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;

  background-color: black;
`;

export const HeaderWrapper = styled.View`
  height: 55px;

  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CameraWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;

  margin: 16px;
`;

export const RNCamera = styled(ReactNativeCamera)`
  flex: 1;
`;

export const CaptureButton = styled.TouchableOpacity`
  align-self: center;
`;

export const ImageCapture = styled.Image``;
