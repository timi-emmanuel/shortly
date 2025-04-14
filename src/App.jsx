import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
