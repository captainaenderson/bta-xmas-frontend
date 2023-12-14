import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import RecipeSelector from './components/RecipeSelector';
import Snowfall from "react-snowfall";
import Spotify from './components/Spotify';



function App() {

  return (
    <>
      <Snowfall />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />   
      </Routes>
      <div id="rezepte">
        <RecipeSelector />
      </div>
      <div id="playlist">
        <Spotify />
      </div>
    </>
  )
}

export default App
