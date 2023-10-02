import react from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
