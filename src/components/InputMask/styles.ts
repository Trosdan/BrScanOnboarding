import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: white;
`;

export const Label = styled.Text`
  font-size: 18px;

  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const TextInput = styled(TextInputMask)`
  color: ${({ theme }) => theme.colors.textWhite};
`;
