import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Router from './router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
