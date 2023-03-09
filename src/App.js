import './App.css';
import StockLoop from "./components/StockLoop.js";

function App() {
  return (
    <div className="App">
      <header>
          <div className="header upper-container">
              <img className="big-logo" src="https://1000logos.net/wp-content/uploads/2022/10/Grand-Theft-Auto-V-logo.png"/>
              <div className="stats">
                  <div className="total-investments"><p className="stats-text">Investments made:<br/>38</p></div>
                  <div className="total-invested"><p className="stats-text">Total invested:<br/>$ 114 756.38</p></div>
              </div>
          </div>
          <nav>
              <a href="#1"><div className="nav-box">Home</div></a>
              <a href="#2"><div className="nav-box">My Portfolio</div></a>
          </nav>
          <StockLoop/>
      </header>
    </div>
  );
}

export default App;
