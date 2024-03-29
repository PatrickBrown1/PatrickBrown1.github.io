import React from "react";

import useWindowSize from '../Hooks/useWindowSize';

import Hero from '../pages/Hero/Hero';
import AboutMe from '../pages/AboutMe/AboutMe';
import Contact from '../pages/Contact/Contact';
import Experience from '../pages/Experience/Experience';

const App = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <Hero windowSize={windowSize} />
      <AboutMe windowSize={windowSize} />
      <Experience />
      <Contact />
    </>
  );
}
export default App;
