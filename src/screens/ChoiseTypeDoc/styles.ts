import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const MainContent = styled.View`
  flex: 1;
`;

export const TextWrapper = styled.View`
  flex: 1;
  justify-content: center;
  margin: 28px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};

  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  font-size: 22px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
`;
