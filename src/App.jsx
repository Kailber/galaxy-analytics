import { AnalyticsPage } from './pages/AnalyticsPage/AnalyticsPage';
import { GeneratorPage } from './pages/Generator/GeneratorPage';
import { History } from './pages/History/History';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnalyticsPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
