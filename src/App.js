import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimanials from './components/testimonials/Testimanials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimanials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
