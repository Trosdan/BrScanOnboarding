import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Home from './screens/Home';
import Indexing from './screens/Indexing';
import Tutorial from './screens/Tutorial';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tutorial />
    </ThemeProvider>
  );
}
