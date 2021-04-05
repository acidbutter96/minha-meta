import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import dark2 from './styles/themes/dark2';

import Layout from './components/Layout';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark2}>
      <GlobalStyles/>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
