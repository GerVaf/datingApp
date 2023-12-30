import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="p-5 pt-16 h-full flex flex-col justify-between items-center">
        {/* intro welcome  */}
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-bold text-3xl">Monky</h1>
          <p className="text-base">
            the best feeling what you never get before !!
          </p>
          <p>
            blaah blah blahblaah blah blahblaah blah blahblaah blah blahblaah
            blah blahblaah blah blahblaah blah blah
          </p>
        </div>
        <Link to={'/posts'} className="intro-btn w-full">Get Start</Link>
      </div>
    </div>
  );
};

export default Home;
