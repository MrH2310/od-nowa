import './scss/main.scss';

import NavBar from './components/header/NavBar';
import AboutUs from './components/AboutUs';
import HomeBar from './components/HomeBar';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <HomeBar/>
        <AboutUs/>
      </main>
      <footer>
        <Contact/>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
