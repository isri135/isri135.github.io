import Home from './pages/Home';
import Photography from './pages/Photography';
import Robotics from './pages/Robotics';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Robotics' element={<Robotics />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
