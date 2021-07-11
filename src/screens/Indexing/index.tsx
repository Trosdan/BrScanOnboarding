import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

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
import { useDoc } from '../../hooks/Doc';

interface IndexingProps extends NavigationInjectedProps {}

export default function Indexing({ navigation }: IndexingProps) {
  const [cpfInput, setCpfInput] = useState('');

  const { setCpf } = useDoc();

  const handleOpenPrivacy = useCallback(() => {
    Alert.alert(
      'Política de privacidade',
      'Quisque cursus sed nisi vel consectetur. Nunc a erat at ipsum cursus convallis sit amet in nisi.'
    );
  }, []);

  const handleNavigateTutorial = useCallback(() => {
    setCpf(cpfInput);
    navigation.navigate('Tutorial');
  }, [navigation, cpfInput]);

  return (
    <>
      <Container>
        <TextInfoWrapper>
          <TextInfo>Para começar, preencha as informações abaixo.</TextInfo>
        </TextInfoWrapper>
        <InputMask
          type="cpf"
          keyboardType="numeric"
          value={cpfInput}
          onChangeText={(text) => setCpfInput(text)}
        />

        <PrivacyWrapper>
          <PrivacyText>Ao contnuar você estará de acordo com nossa</PrivacyText>
          <PrivacyLink onPress={handleOpenPrivacy}>
            <PrivacyLinkText>Política de Privacidade</PrivacyLinkText>
          </PrivacyLink>
        </PrivacyWrapper>
      </Container>
      <BottomButton text="AVANÇAR" light onPress={handleNavigateTutorial} />
    </>
  );
}
