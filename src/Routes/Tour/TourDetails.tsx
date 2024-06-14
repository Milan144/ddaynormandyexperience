import React from "react";
import { useParams } from "react-router-dom";
import { ToursData as tours } from "../../Components/ToursData.ts";

export default function TourDetails() {
  // Getting the id from the URL
  let { id } = useParams();
  if (id === undefined) {
    return <h1>404 page not found</h1>;
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={
              {
                backgroundImage: `url('/img/honfleur.jpg')`,
              } as React.CSSProperties
            }
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center"></div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-orange-500">
                    {tours[id].title}
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h1 className="mb-4 text-xl leading-relaxed font-bold text-orange-500">
                        Tour overview
                      </h1>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {tours[id].overview}
                      </p>
                      <h1 className="mb-4 text-xl leading-relaxed font-bold text-orange-500">
                        Itinerary
                      </h1>
                      <pre className="mb-4 text-lg leading-relaxed text-blueGray-700" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '100%' }}>
                        {tours[id].itinerary}
                      </pre>
                      <h1 className="mb-4 text-xl leading-relaxed font-bold text-orange-500">
                        <p>
                          THE FRENCH LAW REQUIRES TO INDICATE THE PRICES ON THE
                          WEBSITE, BUT EACH TOUR IS ADAPTED ACCORDING TO YOUR
                          REQUEST
                        </p>
                      </h1>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <p>Duration: {tours[id].duration}</p>
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <p>Rate: {tours[id].rate}</p>
                      </p>
                      <a
                        href={"/tour/" + id + "/book"}
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                      >
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
