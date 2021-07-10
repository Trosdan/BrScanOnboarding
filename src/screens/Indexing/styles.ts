import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextInfoWrapper = styled.View`
  flex: 1;

  justify-content: center;
`;

export const TextInfo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};

  color: ${({ theme }) => theme.colors.textWhite};
`;

export const PrivacyWrapper = styled.View`
  flex: 1;

  justify-content: flex-end;
  align-items: center;
`;

export const PrivacyText = styled.Text`
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const PrivacyLink = styled.TouchableOpacity``;

export const PrivacyLinkText = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};
  font-family: ${({ theme }) => theme.fonts.IBMPlexSans};
  text-decoration-line: underline;
`;
