import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './features/Navbar.jsx'; 
import AppRoutes from './AppRoutes.jsx';
function App() {
  return (
    <Router>
      <div className="app">
        <h1>React on Rails Blog</h1>
        <p>find this app layout in react-client/src/App.jsx</p>
      </div>
      <NavBar />
      <AppRoutes />
   </Router>
  )
}

export default App
