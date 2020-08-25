import React from 'react';
import './sass/style.scss';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <Heading />
        <Paragraph />
        <List /> 
      </div>
    </div>
    <Footer />
  </>

  );
  
}


export default App;
