
import './App.css';
import NavBar from './components/navbar/navBar';
import DarkThemeProvider from './components/setDarkMode/setDarkMode';
import HomePage from './pages/Home/Home';
import Terms from './pages/Terms/Terms';
import AboutUs from './pages/aboutUs/AboutUs';
import FutureWorld from './pages/futureWorld/FutureWorld';
import Playa from './components/Musicplaya/playa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <DarkThemeProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />  
        </Routes>
        <Routes>
          <Route path='/about' element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path='/futureworld' element={<FutureWorld />} />  
        </Routes>
        <Routes>
          <Route path='/terms' element={<Terms />}/>
        </Routes>
      
        <Playa />
      </Router>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
