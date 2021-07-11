import styled from 'styled-components/native';

interface LightMode {
  light: boolean;
}

export const Container = styled.View`
  height: 55px;
  flex-direction: row;

  align-items: center;
`;

export const ButtonImageLeft = styled.TouchableOpacity`
  margin: 0 8px;
`;

export const Text = styled.Text<LightMode>`
  flex: 1;

  text-align: right;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: ${({ theme, light }) =>
    light ? theme.colors.textWhite : theme.colors.textBlack};
`;

export const ImageLeft = styled.Image``;
