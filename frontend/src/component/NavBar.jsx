import React from "react";

function Logo() {
  return (
    <div className="BackgroundBlock flex items-center justify-center text-white font-bold text-3xl rounded-2xl border-solid  ">
      <span className="bg-orange-500 ">FPT</span>
      <span className="text-white bg-black">Hub</span>
    </div>
  );
}

function CategoryLink() {
  return (
    <a
      href="/category"
      className="category-link ml-4 text-lg font-bold"
      aria-label="Category Link"
      role="link"
    >
      Category
    </a>
  );
}

function SearchWrapper() {
  return (
    <div className="search-container flex items-center hidden md:block ">
      {/* <div className="search-icon w-7 h-7 rounded-full border-2 border-neutral-700" /> */}
      <input
        type="text"
        className="search-input w-96 h-14 rounded-3xl border border-black px-4"
        placeholder="Search for anything"
      />
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="relative header w-full h-20 flex justify-between items-center p-4 border-b border-solid border-b-gray-600 shadow-sm	shadow-orange-500">
      <div className="logo flex items-center">
        <Logo />
      </div>
      <SearchWrapper />
      <CategoryLink />
    </div>
  );
}
