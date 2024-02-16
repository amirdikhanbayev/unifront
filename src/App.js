import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

import Catalog from './components/sneakers/Catalog.js';
import About from './components/sneakers/About';

const App = () => {
    return (
        <Router>
            <div>
                <header className="header">
                    <Link to="/app" className="link">
                        Home
                    </Link>
                    <Link to="/about" className="link">
                        About
                    </Link>
                    <Link to="/catalog" className="link">
                        Catalog
                    </Link>
                </header>
                <Routes>
                    <Route exact path="/app"  />
                    <Route path="/about" element={<About />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
                <div className="contact-container">
                    <h2>Do you want to shop?</h2>
                    <button>
                        <Link to="/catalog">Lets shop =)</Link>
                    </button>
                </div>
            </div>
        </Router>
    );
};

export default App;