import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

import Catalog from './components/sneakers/Catalog.js';
import About from './components/sneakers/About';
import Home from './components/sneakers/Home';

const App = () => {
    return (
        <Router>
            <div>
                <header className="header">
                    <Link to="/" className="link">
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
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;