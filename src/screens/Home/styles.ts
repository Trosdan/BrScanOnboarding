import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageHome = styled.Image``;

export const MainText = styled.Text`
  margin-top: 18px;
  font-size: 22px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const SubText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  color: ${({ theme }) => theme.colors.textBlack};
`;
