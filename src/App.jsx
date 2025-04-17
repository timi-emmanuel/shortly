import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import LoginWrapper from './pages/LoginWrapper';

function App() {
  const location = useLocation();

  // List of paths where navbar should be hidden
  const path = location.pathname
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<LoginWrapper path={path} />} />
        <Route path="/signup" element={<LoginWrapper path={path}/>} />
      </Routes>
    </>
  );
}

export default App;
