import React from "react";

export default function About() {
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
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/photo-profil-1.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Stanislas Hommet
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h1 className="mb-4 text-xl leading-relaxed font-bold text-orange-500">
                        A professional guide since 1996
                      </h1>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        I’ve been a professional guide since 1996. I’m also a
                        teacher for students in tourism, cultural mediation and
                        instructor for guides and as a PHD researcher about the
                        world war two, i’m an author. I traveled all around the
                        world for teaching and guiding, so I’m very familiar
                        with travelers and their needs. I lived and teached in
                        Africa, and i was borned in Normandy in 1971, i’m a
                        norman people, my family is from this region and i Know
                        very well it and i love to share my knowledge and
                        experiences of my region and country !
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        I have a university master degree in history specialized
                        in World Word II and I’have a PHD about the WWII. I’ve
                        also a university master degree in sciences of
                        education, in cultural mediation, Art History and know
                        very well the periode of the sea side resorts
                        (1840-1914) with the Impressionist painting periode in
                        Normandy. Next to art and history I know very well the
                        culinary specialties of Normandy. As i share my time
                        between Bayeux, Caen, Rouen, Le Havre, Deauville,
                        Cabourg, Etretat, I can guide you there and show you all
                        the little secret part of all the whole Normandy.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Number of guide card : GC-2018-14-008D
                      </p>
                      <h1 className="mb-4 text-xl leading-relaxed font-bold text-orange-500">
                        A promise
                      </h1>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        DDAYNormandyExperience Tours by Publiculture is
                        dedicated to offer the best shore excursions to explore
                        Normandy and discover the DDAY, the Battle of Normandy
                        and others sites in Normandy.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        We work closely with our guests to design and adjust the
                        best itinerary for the best holidays.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        We promise to offer you an unique experience, not only a
                        guiding tour.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        As a guide, i do a free flowing discussion – not a pre
                        scripted lecture – and i’m very specialized for kids,
                        teenagers, youngs adults, families.
                      </p>
                      <h1 className="mb-4 text-xl leading-relaxed font-bold text-orange-500">
                        The transportation
                      </h1>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        As a guide i work with différents companies in Normandy
                        to transport you. It means you will have a driver and me
                        as a guide, free to talk with you, totaly available for
                        you !
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        You will be in a Class V mercedes or in a Tesla ( 2
                        people) or a Caravelle Volkswagen
                      </p>
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
