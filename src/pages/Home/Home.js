import "./Home.scss";

import Header from '../../components/Header/Header';
import HeroSlide from '../Home/HeroSlide/HeroSlide'
import Objective from '../Home/Objective/Objective'
import Product from '../Home/Product/Product'
import Prove from '../Home/Prove/Prove'
import Footer from '../../components/Footer/Footer'

function App() {
  return (
    <div className="home">
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
