import { Routes, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Mainsection from "./pages/Mainsection";
import Searchbar from './components/Searchbar/Searchbar'
import Jobs from './pages/Jobs'
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import EmployerRegester from "./pages/EmployerRegester";
import EmployerLogin from "./pages/EmployerLogin";
import EmployerDashboard from './Employerdashboard/slides/EmployerDashboard'
import AIInterview from "./AIInterview";

function App() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<MainHome />} />
      <Route path="/home" element={<Mainsection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employerregester" element={<EmployerRegester />} />
      <Route path="/emplogin" element={<EmployerLogin />} />
      <Route path="/header" element={<Navbar />} />
      <Route path="/jobpg" element={<Jobs />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/profile" element={<Profile />} />    
      <Route
          path="/employerdashboard"
          element={<EmployerDashboard />}
        />
        <Route path="/interview" element={<AIInterview />} />
      </Routes>
  );
}

export default App;