import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;

  padding: 0 40px;
`;

export const Image = styled.Image``;

export const MainText = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};

  color: black;
`;

export const SubText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: black;
`;
