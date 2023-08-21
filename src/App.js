import React from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import NavbarRouter from "./routers/NavbarRouter";
import { BrowserRouter } from "react-router-dom";
import {} from "./assets/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div id="content">
          <NavbarRouter />
        </div>
        <Footer />
      </BrowserRouter>
      {/* kjabsfjiabsifjbasdifj */}
    </>
  );
};

export default App;
