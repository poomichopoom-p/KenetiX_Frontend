import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
//import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./componente/NavbarFrontend";
import ActionButton from "./componente/ActionButton";
import ProductButton from "./componente/ProductButton";
import Login from "./pages/Login";

function App() {

  const [page, setPage] = useState('home');

  const renderContent = () => {
    switch (page) {
      case 'allProduct': return <div className="p-10 text-center">All Products</div>;
      case 'allBrand': return <div className="p-10 text-center">All Brands</div>;
      case 'howWork': return <div className="p-10 text-center">How It Work</div>;
      case 'contact': return <div className="p-10 text-center">Contact Us</div>;
      case 'login': return <Login setPage={setPage} />;
      default: return (
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Shop</h1>
          <div className="flex gap-4 justify-center">
            <ActionButton text="Create Account" />
            <ActionButton text="Login" onClick={() => setPage('login')} />
          </div>
        </div>
      );
    }
  };


  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar setPage={setPage} currentPage={page} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
