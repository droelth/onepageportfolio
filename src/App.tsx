import HeaderView from "./components/header/header";
import HeroView from "./components/hero/hero";
import AboutView from "./components/About/About";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Medium from "./components/Medium/Medium";
import Footer from "./components/Footer/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen"; // Import splash screen

import { useRef, useState } from "react";

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const mediumRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      {!showMainContent && (
        <SplashScreen onFinish={() => setShowMainContent(true)} />
      )}
      {showMainContent && (
        <>
          <HeaderView aboutRef={aboutRef} />
          <HeroView />
          <AboutView aboutRef={aboutRef} />
          <Services />
          <Works />
          <Medium />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
