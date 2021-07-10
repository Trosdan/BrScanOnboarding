import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 55px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: ${({ theme }) => theme.colors.textWhite};
`;
