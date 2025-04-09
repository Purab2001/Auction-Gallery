import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-20">
        <h1 className="inline-flex text-2xl text-blue-800 cursor-pointer">
          Auction<span className="font-bold text-yellow-400 -ml-2">Gallery</span>
        </h1>
        <nav className="grid grid-flow-col gap-4 text-xl">
          <a className="link link-hover">Bid.</a>
          <a className="link link-hover">Win.</a>
          <a className="link link-hover">Own.</a>
        </nav>
        <nav className="grid grid-flow-col gap-4 md:gap-8 poppins text-base">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auctions</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How it Works</a>
        </nav>
        <aside>
          <p className="text-base">
            © {new Date().getFullYear()} AuctionHub - All right reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
