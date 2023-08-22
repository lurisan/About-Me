import { useEffect, useRef, useState } from 'react';
import './App.css';
// import Router from './Router';
import GoTop from './components/GoTop';
import Work from './pages/Work';
import Landing from './pages/Landing';
import Education from './pages/Education';
import Skillset from './pages/Skillset';
import Organization from './pages/Organization';
import Community from './pages/Community';
import Socials from './pages/Socials';
import Me from './pages/Me';

const App = () => {
  const [scrollPosition, setSrollPosition] = useState<number>(0);
  const [showGoTop, setshowGoTop] = useState<string>('goTopHidden');

  const refScrollUp = useRef<any>();

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoTopButton = () => {
    let position = window.scrollY;
    setSrollPosition(position);
    if (scrollPosition > 50) return setshowGoTop(() => 'block');
    if (scrollPosition < 50) return setshowGoTop(() => 'hidden');
  };

  useEffect(() => {
    if (scrollPosition < 50) setshowGoTop('hidden');
    window.addEventListener('scroll', handleGoTopButton);
    return () => window.removeEventListener('scroll', handleGoTopButton);
    // eslint-disable-next-line
  }, [scrollPosition]);

  return (
    <div className="App min-h-screen">
      <div ref={refScrollUp}>
        <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      </div>
      {/* <Router /> */}
      <Landing />
      <Work />
      <Education />
      <Skillset />
      <Community />
      <Organization />
      <Socials />
      <Me />
    </div>
  );
};

export default App;