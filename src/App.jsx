import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './App.module.css'
import { Navv } from './Components/Navbar/Navv';
import { Hero } from './Components/Hero/Hero';
import { Partner } from './Components/Partner/Partner';
import { Info } from './Components/CompanyInfo/Info';
import { Footer } from './Components/Footer/Footer';

function App() {
  

  return (
    <>
    <div className={Styles.App}>
      <Navv/>
      <Hero/>
      <Partner/>
      <Info/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
