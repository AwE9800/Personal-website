import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './About-me/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
