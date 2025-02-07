import React from "react";
import Form from "../components/Form";
import Services from "../components/Services";
import Discount from "../components/Discount";
import CabImg from "../components/CabImg";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import Mobileapp from "../components/Mobileapp";




const Home = () => {
  return (
    <>
      <Form />
      <Services/>
      <Discount/>
      <CabImg/>
      <Mobileapp/>
      
      </>
  );
};

export default Home;
