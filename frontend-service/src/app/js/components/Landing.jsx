import React from "react";
import NavBar from './layouts/NavBar';
import Top from './layouts/Top';
import Services from './layouts/Services';
import Info from './layouts/Info';
import Categories from './layouts/Categories';
import Footer from './layouts/Footer';


function Landing() {
    return (
      <div>
        <div className="bg-color">
          <NavBar/>
          <Top/>
        </div>
        <Services/>
        <Info/>
        <Categories/>
        <Footer/>
      </div>
    );
  }
  
export default Landing;
  