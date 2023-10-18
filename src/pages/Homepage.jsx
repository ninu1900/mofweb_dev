import React, { Suspense, useState } from 'react';
import { Blogs, IndexNavbar } from "../components"
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import TanStackTable from '../components/TanStackTable';

import i18n from "../i18n";
import LocaleContext from '../LocaleContext';

function Loading() {
  return(
    <>Loading....</>
  )
}

const Homepage = ({blogs}) => {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanges', (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div>
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Suspense fallback={<Loading />}>

          <IndexNavbar />
          <Hero />
          <Carousel />
          <TanStackTable />
          <Blogs blogs={blogs} /> 
          <Footer />  
         
        </Suspense>
      </LocaleContext.Provider>
    </div>
  )
}

export default Homepage