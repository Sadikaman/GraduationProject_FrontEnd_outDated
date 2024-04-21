
import { useState } from 'react';
import Navbars from './component/Navbars';
import Hero from './component/Hero';
import CountryCard from './component/CountryCard'
import Contact from './component/Contact'
import Footer from './component/Footer'
import ScrollToTopButton from './component/ScrollToTopButton';
import CertificateResume from './component/CertificateResume';

'use client';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>

      <div className={` ${darkMode && "bg-white dark  dark:text-white dark:bg-gray-900"}`}>
        {/* nav bar and darkmode */}
        <Navbars isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        {/* section header and profile */}

        <Hero isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        {/* CountryCard */}
        <CountryCard isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        {/* resume and cenrtaficate */}
        <CertificateResume isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        {/* contact section */}
        <Contact isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        {/* footer section */}
        <Footer isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        {/*scroll up */}
        <ScrollToTopButton />

      </div >
    </>
  );
}

export default App;