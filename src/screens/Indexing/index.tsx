import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import InputMask from '../../components/InputMask';
import BottomButton from '../../components/BottomButton';

import {
  Container,
  TextInfoWrapper,
  TextInfo,
  PrivacyWrapper,
  PrivacyText,
  PrivacyLink,
  PrivacyLinkText,
} from './styles';

export default function Indexing() {
  const [cpf, setCpf] = useState('');

  const handleOpenPrivacy = useCallback(() => {
    Alert.alert(
      'Política de privacidade',
      'Quisque cursus sed nisi vel consectetur. Nunc a erat at ipsum cursus convallis sit amet in nisi.'
    );
  }, []);

  return (
    <>
      <Container>
        <TextInfoWrapper>
          <TextInfo>Para começar, preencha as informações abaixo.</TextInfo>
        </TextInfoWrapper>
        <InputMask
          type="cpf"
          keyboardType="numeric"
          value={cpf}
          onChangeText={(text) => setCpf(text)}
        />

        <PrivacyWrapper>
          <PrivacyText>Ao contnuar você estará de acordo com nossa</PrivacyText>
          <PrivacyLink onPress={handleOpenPrivacy}>
            <PrivacyLinkText>Política de Privacidade</PrivacyLinkText>
          </PrivacyLink>
        </PrivacyWrapper>
      </Container>
      <BottomButton text="AVANÇAR" light />
    </>
  );
}