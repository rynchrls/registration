import React from "react";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";

function Home() {
  return (
    <React.Fragment>
      {/* this is the header section component */}
      <Header />
      {/* this is the hero section component */}
      <Hero />
      {/* this is the footer section component */}
      <Footer />
    </React.Fragment>
  );
}

export default Home;
