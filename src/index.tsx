import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Router from './router';

import { DocProvider } from './hooks/Doc';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DocProvider>
        <Router />
      </DocProvider>
    </ThemeProvider>
  );
}
