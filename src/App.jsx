import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Bids from "./components/Bids/Bids";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (item) => {
    setFavorites((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div className="px-4 py-8 md:p-8 lg:p-32 bg-[#EBF0F5]">
        <div className="text-center md:text-left">
          <h2 className="font-medium text-2xl md:text-3xl">Active Auctions</h2>
          <p className="text-lg md:text-xl my-2 md:my-5">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-[70%]">
            <Bids onBid={handleAddFavorite} favorites={favorites} />
          </div>
          <div className="w-full md:w-[30%]">
            <Dashboard
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
            />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          top: "1rem",
          right: "1rem",
        }}
      />
    </>
  );
}

export default App;
