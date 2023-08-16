import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import SearchPage from './components/SearchPages';
import IronmanPages from './components/IronManPages';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ironmanpages" element={<IronmanPages />} />
            <Route path="/searchpages" element={<SearchPage />} />
            <Route path="/" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
