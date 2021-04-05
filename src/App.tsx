import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles/>
      <h1>Monthly Sales Chart</h1>
    </ThemeProvider>
  );
}

export default App;
