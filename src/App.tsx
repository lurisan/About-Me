import { useEffect, useRef, useState } from 'react';
import './App.css';
// import Router from './Router';
import GoTop from './components/GoTop';
import Community from './pages/Community';
import Education from './pages/Education';
import Landing from './pages/Landing';
import Organization from './pages/Organization';
import Skillset from './pages/Skillset';
import Socials from './pages/Socials';
import Work from './pages/Work';

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
    </div>
  );
};

export default App;