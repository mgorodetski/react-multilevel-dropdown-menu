import './App.css';
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-area">
          <a href="/#" className="logo">LOGO</a>
          <Navbar />
        </div>
      </header>
    </div>
  );
}

export default App;
