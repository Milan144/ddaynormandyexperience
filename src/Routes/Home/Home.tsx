import React from "react";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Discover the History of
                <span className="text-orange-500"> DDay</span> Normandy.
              </h1>
              <div className="w-20 h-2 bg-orange-700 my-4"></div>
              <p className="text-xl mb-10">
                Experience a once in a lifetime opportunity to see the sites of
                the famous World War II event, with our team of knowledgeable
                guides.
              </p>
              <div className="flex gap-4">
                <a
                  href="/tour"
                  className="bg-orange-700 text-white text-center text-2xl font-medium px-4 py-2 rounded-xl shadow border-white border-2 hover:bg-white hover:text-orange-700 hover:border-orange-700"
                >
                  Explore tours
                </a>
                <a
                  href="/about"
                  className="bg-white text-orange-700 text-2xl text-center font-medium px-4 py-2 rounded-xl shadow border-orange-700 border-2 hover:bg-orange-700 hover:text-white hover:border-white"
                >
                  About us
                </a>
              </div>
            </div>
          </header>
        </div>
      </div>
      <img
        src="/img/utah.jpg"
        alt="Beach of Normandy, France"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
      />
    </div>
  );
}
