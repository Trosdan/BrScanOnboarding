import styled from 'styled-components/native';

interface LightMode {
  light: boolean;
}

export const Container = styled.TouchableOpacity<LightMode>`
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme, light }) =>
    light ? theme.colors.background : 'transparent'};
`;

export const ImageIcon = styled.Image``;

export const Text = styled.Text<LightMode>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: ${({ theme }) => theme.colors.textWhite};

  color: ${({ theme, light }) =>
    light ? theme.colors.textRed : theme.colors.textWhite};
`;
