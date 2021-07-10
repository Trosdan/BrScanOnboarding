import styled from 'styled-components/native';

interface LightProps {
  light: boolean;
}

export const Container = styled.TouchableOpacity<LightProps>`
  height: 55px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, light }) =>
    light ? theme.colors.background : theme.colors.primary};
`;

export const ButtonText = styled.Text<LightProps>`
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme, light }) =>
    light ? theme.colors.textRed : theme.colors.textWhite};
`;
