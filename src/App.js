import './App.css';

import Hero from './components/Hero/Hero.jsx';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
