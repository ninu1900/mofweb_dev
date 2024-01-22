import React from 'react';
import { Blogs, IndexNavbar2 } from "../components"
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Table from '../components/Table';
import SystemList from '../components/SystemList';

import i18n from "../i18n";





const Homepage = ({blogs}) => {
  

  return (
    <div>
      

          <IndexNavbar2 />
          <Hero />
          <Carousel />
          <SystemList />
          <Table blogs={blogs}/>
          <Blogs blogs={blogs} /> 
          <Footer />  
         
      
    </div>
  // <section>
  //   <IndexNavbar />
    
  //     <div className="flex">
  //       <Carousel />
  //       <SystemList />
  //     </div>
  //   <Blogs blogs={blogs} /> 
  // </section>
  )
}

export default Homepage