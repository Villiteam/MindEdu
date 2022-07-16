import "./landing.scss";

import Header from '../../components/Header/Header';
import HeroSlide from '../Landing/HeroSlide/HeroSlide'
import Objective from '../Landing/Objective/Objective'
import Product from '../Landing/Product/Product'
import Prove from '../Landing/Prove/Prove'
import Footer from '../../components/Footer/Footer'

function App() {
  return (
    <div className="landing">
      <Header />
      <HeroSlide />
      <Objective />
      <Product />
      <Prove />
      <Footer />
    </div>
  );
}

export default App;
