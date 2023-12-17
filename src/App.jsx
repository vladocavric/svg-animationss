import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.scss'

import Logo from './assets/Logo'

function App() {


  return (
    <>
      <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/logo">Logo</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Route configurations */}
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/contact" element={<Logo />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
