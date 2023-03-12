import './App.css';
import StockLoop from "./components/StockLoop.js";
import InvestmentsScreen from "./components/InvestmentsScreen";
import {useState} from "react";
import HomeScreen from "./components/HomeScreen";
import AdminPanel from "./components/Admin";

function App() {
    const [activeSection, setActiveSection] = useState('home')

    function handleNavClick(section) {
        setActiveSection(section)
    }


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
                    <button onClick={() => handleNavClick('home')}
                            className={`nav-box ${activeSection === 'home' ? 'active' : ''}`}>
                        Home
                    </button>
                    <button onClick={() => handleNavClick('portfolio')}
                            className={`nav-box ${activeSection === 'portfolio' ? 'active' : ''}`}>
                        My Portfolio
                    </button>
                    <button onClick={() => handleNavClick('admin')}
                            className={`nav-box ${activeSection === 'admin' ? 'active' : ''}`}>
                        Admin
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

            {activeSection === 'admin' && (
                <section className="admin">
                    <AdminPanel/>
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
