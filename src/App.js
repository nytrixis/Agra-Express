import React, { useState, useEffect } from "react";
import "./css/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Coaches from "./Pages/Coaches";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Contact from "./Pages/Contact";
import LoadingPage from "./components/LoadingPage";

function App() {

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
    {loading ? (
      <LoadingPage /> 
    ) : (
      <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="coaches" element={<Coaches />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
    )}
    </>
  );
}

export default App;
