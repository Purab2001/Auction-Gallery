import React from "react";

const Banner = () => {
  return (
    <div
      className="min-h-screen relative flex sm:block items-center justify-center text-center px-6 sm:px-16 md:px-32 md:pt-56"
      style={{
        backgroundImage: "url('/Banner-min.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-neutral-content max-w-full sm:max-w-[80%] md:max-w-[60%] text-center sm:text-left">
        <h1 className="font-semibold text-4xl sm:text-5xl">
          Bid on Unique Items from Around the World
        </h1>
        <p className="font-light text-lg sm:text-xl my-5">
          Discover rare collectibles, luxury goods, and vintage treasures in our
          curated auctions.
        </p>
        <button className="btn rounded-4xl font-medium text-lg px-6 sm:px-8 py-4 sm:py-6">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
