import React from "react";
import { FiHeart, FiX } from "react-icons/fi";

const Dashboard = ({ favorites, onRemoveFavorite }) => {
  const totalAmount = favorites.reduce(
    (sum, item) => sum + parseFloat(item.currentBidPrice.replace(/[$,]/g, "")),
    0
  );

  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center justify-center py-3 md:py-4 border-b border-b-[#DCE5F3] gap-2 text-[#0E2954]">
        <FiHeart size={20} md:size={24} className="text-[#0E2954]" />
        <h2 className="text-lg md:text-xl font-medium">Favorite Items</h2>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-4">
          <h3 className="text-base md:text-lg font-medium mb-2">
            No favorites yet
          </h3>
          <p className="px-4 opacity-70 text-xs md:text-sm">
            Click the heart icon on any item to add it to your favorites
          </p>
        </div>
      ) : (
        <div>
          {favorites.map((item) => (
            <div
              key={item.id}
              className="flex items-start p-2 md:p-3 relative hover:bg-gray-50 border-b border-b-[#DCE5F3]"
            >
              <button
                onClick={() => onRemoveFavorite(item.id)}
                className="absolute top-2 md:top-3 right-2 md:right-3 text-gray-400 hover:text-red-500 cursor-pointer"
              >
                <FiX size={16} md:size={18} />
              </button>

              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 md:w-14 md:h-14 rounded object-cover mr-2 md:mr-4"
              />
              <div className="flex-1">
                <h4 className="font-medium text-[#0E2954] text-xs md:text-sm line-clamp-1">
                  {item.title}
                </h4>
                <div className="flex gap-2 md:gap-4 items-center mt-1">
                  <p className="text-xs text-gray-800">
                    ${parseFloat(item.currentBidPrice.replace(/[$,]/g, ""))}
                  </p>
                  <p className="text-xs text-gray-500">
                    Bids: {item.bidsCount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center p-3 md:p-4 border-t border-t-[#DCE5F3] text-[#0E2954]">
        <span className="text-sm md:text-base font-semibold">
          Total bids Amount
        </span>
        <span className="text-sm md:text-base font-semibold">
          ${totalAmount}
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
