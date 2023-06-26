import "./styles/styles.scss";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateDeadProfile from "./pages/CreateDeadProfile";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateDeadProfile />} />
      </Routes>
    </Router>
  )
}

export default App
