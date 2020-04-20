import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './pages';
import { About } from './pages/about';
import { UserContext } from './UserContext';

const UseContextComponent = () => {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about/">About</Link>
              </li>
            </ul>
          </nav>
          <UserContext.Provider value={providerValue}>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
          </UserContext.Provider>
        </div>
      </Router>
    </div>
  );
};

export default UseContextComponent;
