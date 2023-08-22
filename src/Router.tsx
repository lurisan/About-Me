import {
  ReactElement,
  useLayoutEffect
} from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';

const ScrollToTop = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/work" element={<Landing />} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
};

export default Router;
