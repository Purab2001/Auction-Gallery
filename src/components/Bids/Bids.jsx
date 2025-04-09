import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiHeart } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";

const Bids = ({ onBid, favorites }) => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);

  useEffect(() => {
    if (favorites) {
      const favoriteIds = favorites.map((item) => item.id);
      setClickedItems(favoriteIds);
    }
  }, [favorites]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/blogs.json");
      const data = await response.json();
      setAuctionItems(data);
    };
    fetchData();
  }, []);

  const handleBidNow = (itemId) => {
    const item = auctionItems.find((i) => i.id === itemId);
    setClickedItems([...clickedItems, itemId]);

    if (onBid && item) {
      onBid(item);
    }

    toast.success(`Bid placed on ${item.title}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: "#0E2954",
        color: "#ffffff",
      },
      progressStyle: {
        background: "#EBF0F5",
      },
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-4 md:py-6 px-2 md:px-4 text-left text-xs md:text-sm border-b border-b-[#DCE5F3]">
              Items
            </th>
            <th className="py-4 md:py-6 px-2 md:px-4 text-center text-xs md:text-sm border-b border-b-[#DCE5F3]">
              Current Bid
            </th>
            <th className="py-4 md:py-6 px-2 md:px-4 text-center text-xs md:text-sm border-b border-b-[#DCE5F3]">
              Time Left
            </th>
            <th className="py-4 md:py-6 px-2 md:px-4 text-center text-xs md:text-sm border-b border-b-[#DCE5F3]">
              Bid Now
            </th>
          </tr>
        </thead>
        <tbody>
          {auctionItems.map((item) => {
            const isClicked = clickedItems.includes(item.id);
            return (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 md:py-4 px-2 md:px-4 border-b border-b-[#DCE5F3]">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover rounded mr-2 md:mr-4"
                      onError={(e) =>
                        (e.target.src = "/images/placeholder.jpg")
                      }
                    />
                    <span className="font-medium text-[#0E2954] text-xs md:text-sm line-clamp-1">
                      {item.title}
                    </span>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 text-center border-b border-b-[#DCE5F3] font-semibold text-[#0E2954] text-xs md:text-sm">
                  {item.currentBidPrice}
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 text-center border-b border-b-[#DCE5F3] text-[#0E2954] text-xs md:text-sm">
                  {item.timeLeft}
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 text-center border-b border-b-[#DCE5F3]">
                  <button
                    onClick={() => !isClicked && handleBidNow(item.id)}
                    disabled={isClicked}
                    className={`transition-colors duration-200 ${
                      isClicked
                        ? "text-red-500 cursor-not-allowed"
                        : "text-[#0E2954] hover:text-red-500 cursor-pointer"
                    }`}
                  >
                    {isClicked ? (
                      <FiHeart
                        size={18}
                        md:size={21}
                        className="fill-current"
                      />
                    ) : (
                      <CiHeart
                        size={20}
                        md:size={24}
                        className="stroke-current"
                      />
                    )}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bids;
