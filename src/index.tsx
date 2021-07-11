import React from 'react';
import Orientation from 'react-native-orientation-locker';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Router from './router';

import { DocProvider } from './hooks/Doc';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DocProvider>
        <Router />
      </DocProvider>
    </ThemeProvider>
  );
}
