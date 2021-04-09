import React from 'react';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import Main from '../components/Main';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { Container } from './style';

function Home() {
  return (
    <Container>
      <Header />
      <MainHeader />
      <Main />
      <About />
      <Contact/>
      <Footer />
    </Container> 
  );
}

export default Home;