import { Article, Brand, Navbar, CTA, Feature } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatVolterbot,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatVolterbot />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
