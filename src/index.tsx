import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Home from './screens/Home';
import Indexing from './screens/Indexing';
import Tutorial from './screens/Tutorial';
import ChoiseTypeDoc from './screens/ChoiseTypeDoc';
import ChoiseSideDoc from './screens/ChoiseSideDoc';
import ChoiseHowSendPhoto from './screens/ChoiseHowSendPhoto';
import PhotoCapture from './screens/PhotoCapture';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PhotoCapture />
    </ThemeProvider>
  );
}
