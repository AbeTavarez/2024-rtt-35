import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function App() {
  // reads the environment variables from .env file
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:id"  element={<ProfilePage />}/>
      </Routes>
    </>
  );
}

export default App;
