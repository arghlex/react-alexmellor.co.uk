import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eg" element={<Portfolio />} />

        </Routes>
    </div>
  );
}

export default App;
