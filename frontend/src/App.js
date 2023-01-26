import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// common components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// screes
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// translate ar and en 
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

function App() {
  const [t,i18n]=useTranslation();
  useEffect(()=>{
    document.title = t('html_title')
  },[t])
  return (
    <Router>
      <Header />
      <div className='whatsapp-fixed-icon'><a><i className="fa-brands fa-whatsapp"></i></a></div>
      <main className='py-5'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
