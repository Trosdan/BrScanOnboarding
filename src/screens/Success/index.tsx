import React, { useCallback, useEffect, useState } from 'react';

import { Container, ContentWrapper, MainText, SubText } from './styles';
import { NavigationInjectedProps } from 'react-navigation';
import BottomButton from '../../components/BottomButton';
import { useDoc } from '../../hooks/Doc';

interface SuccessProps extends NavigationInjectedProps {}

export default function Success({ navigation }: SuccessProps) {
  const [loading, setLoading] = useState(false);
  const [mainText, setMainText] = useState(
    'Processando e enviando a informação.'
  );
  const [subText, setSubText] = useState('');

  const { docInfo } = useDoc();

  const sendData = useCallback(async () => {
    await waitForSeconds(2000);
    setMainText('Em análise.');
    setSubText('Aguarde um instante.');

    await waitForSeconds(2000);
    setMainText('Pronto!');
    setSubText('Seu documento foi recebido.');
    setLoading(true);
  }, []);

  const handleFinish = useCallback(() => {
    navigation.popToTop();
  }, []);

  function waitForSeconds(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds));
  }

  useEffect(() => {
    sendData();
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <MainText>{mainText}</MainText>
        <SubText>{subText}</SubText>
      </ContentWrapper>
      {loading && <BottomButton text="FINALIZAR" onPress={handleFinish} />}
    </Container>
  );
}
