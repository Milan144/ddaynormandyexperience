import React from "react";
import { ToursData } from "../../Components/ToursData.ts";

class Tour extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h1 className="text-3xl text-center">Tours</h1>
        <br />
        <h2 className="text-xl text-center">Discover the available tours</h2>
        <br />
        <section className="grid min-h-screen p-8 place-items-center">
          <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
            {ToursData.map((tour, index) => (
              <a
                key={index}
                href={`/tour/${index}`}
                className="relative flex-col bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2 no-underline hover:no-underline"
              >
                <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 px-10 sm:pr-6 sm:pl-4">
                  <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">
                    Duration: {tour.duration}
                  </p>
                  <div
                    className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                  >
                    {tour.title}
                  </div>
                  <p className="block font-sans text-sm font-light leading-normal text-inherit mb-4">
                    {tour.overview}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Tour;