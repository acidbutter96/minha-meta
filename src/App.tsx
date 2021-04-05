import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import dark2 from './styles/themes/dark2';

import Routes from './routes';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark2}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
