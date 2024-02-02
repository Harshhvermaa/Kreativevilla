import React from 'react'
import { Header } from './header';
import { Work } from './work';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './banner';
import { Services } from './services';
import { Clients } from './Clients';
import { Touch } from './Touch';
import { Footer } from './footer';

const TrueComponent = () => {
  return (
    <>
      <Header />
      <Banner />
      <Work />
      <Services />
      <Clients />
      <Touch />
      <Footer />
    </>
  )
}

export default TrueComponent