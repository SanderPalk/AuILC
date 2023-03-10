import './App.css';
import StockLoop from "./components/StockLoop.js";
import InvestmentsScreen from "./components/InvestmentsScreen";
import {useState} from "react";
import HomeScreen from "./components/HomeScreen";

function App() {
    const [activeSection, setActiveSection] = useState('home')

    const handleHomeClick = () => {
        setActiveSection('home');
    };

    const handlePortfolioClick = () => {
        setActiveSection('portfolio');
    };


    return (
        <div className="App">
            <header>
                <div className="header upper-container">
                    <img alt='' className="big-logo"
                         src="https://1000logos.net/wp-content/uploads/2022/10/Grand-Theft-Auto-V-logo.png"/>
                    <div className="stats">
                        <div className="total-investments"><p className="stats-text">Investments made:<br/>38</p></div>
                        <div className="total-invested"><p className="stats-text">Total invested:<br/>$ 114 756.38</p>
                        </div>
                    </div>
                </div>
                <nav>
                    <button onClick={handleHomeClick}
                            className={`nav-box ${activeSection === 'home' ? 'active' : ''}`}>Home
                    </button>
                    <button onClick={handlePortfolioClick}
                            className={`nav-box ${activeSection === 'portfolio' ? 'active' : ''}`}>My Portfolio
                    </button>
                </nav>
                <StockLoop/>
            </header>
            {activeSection === 'home' && (
                <section className="home">
                    <HomeScreen/>
                </section>
            )}

            {activeSection === 'portfolio' && (
                <section className="portfolio">
                    <InvestmentsScreen/>
                </section>
            )}
            <footer>
                <div className="footer-content">
                    <p className="footer">&copy; 2023 Aurum Investment LC. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
