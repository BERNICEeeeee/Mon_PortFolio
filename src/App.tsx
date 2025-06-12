import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { lightTheme, darkTheme } from './theme';

import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Passions from './Components/Passions';
import Projects from './Components/Projects';
import Contact from './Components/Contact'; // ← ajoute cette ligne

import { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        
        {/* Bouton de mode sombre */}
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️ Mode clair' : '🌙 Mode sombre'}
        </button>

        {/* 🌟 Ton header tout en haut */}
        <Header />

        {/* Sections avec IDs pour la navigation */}
        <div id="about">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="passions">
          <Passions />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
            <Contact />
        </div>
        {/* Tu peux ajouter d'autres sections ici : CV, Contact, etc. */}
      </>
    </ThemeProvider>
  );
};

export default App;
