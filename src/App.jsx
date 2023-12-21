import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import RecipeSelector from './components/RecipeSelector';
import Snowfall from "react-snowfall";
import Spotify from './components/Spotify';
import HomeDe from './pages/HomeDe';
import RecipeSelectorDe from './components/RecipeSelectorDe';
import Footer from './components/Footer';



function App() {

  return (
    <>
      <Snowfall />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/de" element={<HomeDe />} />  
      </Routes>
      <div id="rezepte">
        {location.pathname === '/de' ? <RecipeSelectorDe /> : <RecipeSelector />}
      </div>
      <div id="playlist">
        <Spotify />
      </div>
      <Footer />
    </>
  )
}

export default App
