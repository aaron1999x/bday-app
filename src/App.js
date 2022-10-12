
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Slider />
        <Hero />
      </div>
    </div>
  );
}

export default App;
