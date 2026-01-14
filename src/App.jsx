import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { Mobile } from './routes/sections/screens/Mobile';
import { useEffect, useState } from 'react';

function ResponsiveApp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile) {
    return <Mobile />;
  }

  return <LandingPage />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResponsiveApp />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/desktop" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
