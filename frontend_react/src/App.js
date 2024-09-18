import React from 'react'

import { About, Footer, Header, Testimonial,Work } from './container';
import { Navbar} from './components';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App