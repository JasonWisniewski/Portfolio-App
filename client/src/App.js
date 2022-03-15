import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contactme from './components/Contactme';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav />
      <About/>
      <Contactme/>
      <Portfolio/>
    </div>
  );
}

export default App;
