import "./styles/styles.scss";
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateDeadProfile from "./pages/CreateDeadProfile";
import DeadProfile from "./pages/DeadProfile";
import UserProfile from "./pages/UserProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateDeadProfile />} />
          <Route path="/buried/" element={<Navigate to="/" />} />
          <Route path="/buried/:deadId" element={<DeadProfile />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
