import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home'
import JournalingPage from './JournalingPage';

const AppRoutes = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/journal">Journal</Link>
              </li>
            </ul>
          </nav>
  
          <hr />
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/journal" component={JournalingPage} />
          </Routes>
        </div>
      </Router>
    );
};

export default AppRoutes;
