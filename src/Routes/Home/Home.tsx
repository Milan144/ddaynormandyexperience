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
      <div className="my-20">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pl-6 pr-6">
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="ml-4">
                <h2 className="font-semibold">Expert guides</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Our knowledgeable guides will bring the past to life and show
                  you the best spots to visit.
                </p>
              </div>
            </div>
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              <div className="ml-4">
                <h2 className="font-semibold">Experience the history</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Discover the rich history of Normandy and its pivotal role in
                  the Allied D-Day.
                </p>
              </div>
            </div>
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>

              <div className="ml-4">
                <h2 className="font-semibold">Unforgettable adventures</h2>
                <p className="mt-2 text-sm text-gray-500">
                  From tasting local products to exploring historic sites, our
                  tours offer unique experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mt-10">
            Discover our range of tour options, including private and group
            tours.
          </h1>
          <h2 className="text-xl text-gray-600 my-10">
            Plan your visit to the historic D-Day landmarks with our guided
            tours.
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="ml-4">
              <h2 className="font-semibold">CUSTOMIZED ITINERARIES</h2>
              <p className="mt-2 text-sm text-gray-500">
                Our private tours offer personalized itineraries tailored to
                your interests and schedule, providing a unique and immersive
                experience.
              </p>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="ml-4">
              <h2 className="font-semibold">EXPERT TOUR GUIDES</h2>
              <p className="mt-2 text-sm text-gray-500">
                Our tour guides are knowledgeable and passionate about the D-Day
                history and will provide insightful commentary and answer any
                questions you may have.
              </p>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="ml-4">
              <h2 className="font-semibold">PHOTO OPPORTUNITIES</h2>
              <p className="mt-2 text-sm text-gray-500">
                Capture the beauty and significance of the D-Day landmarks with
                photo stops along the way. Share your experience on social media
                with our hashtag #DDayNormandyExperience.
              </p>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="ml-4">
              <h2 className="font-semibold">SAFETY AND CONVENIENCE</h2>
              <p className="mt-2 text-sm text-gray-500">
                Travel comfortably and safely with our professional drivers and
                vehicles equipped with navigation and first aid kits. Our team
                is available 24/7.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mt-10">
            Clients Testimonials
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <figure className="mt-10">
                  <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                    <p>
                      “We had an amazing tour with Stanislas and found him to be
                      extremely engaging & a wonderful tour guide! Definitely
                      book him & you will not be disappointed! Stanislas was on
                      time, returned us to our ship on time, & was very
                      considerate of the mobility issues of my in-laws who were
                      in their 80’s. We managed to see, learn, & experience so
                      much, yet we never felt rushed. Truly exceptional guide!”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Paula</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <figure className="mt-10">
                  <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                    <p>
                      “We were impressed by Stanislas’s extensive knowledge of
                      the sites we visited and the stamina required to get us to
                      our requested locations. It was a pleasure traveling with
                      him!”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Peter</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <figure className="mt-10">
                  <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                    <p>
                      “Stanislas was wonderful to spend the day with touring
                      Normandy and the D-Day sites & learning more of what
                      happened here 75 years ago! He offered historically
                      accurate details, as he is a French history professor. He
                      was an amazing driver also, as we never once felt unsafe!
                      I felt like we were touring with an accommodating friend,
                      as the day was so easy & comfortable! He showed us
                      everything we wanted to see & more & would recommend
                      Stanislas to anyone who is visiting Normandy or northern
                      France!”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Linda</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <figure className="mt-10">
                  <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                    <p>
                      “We are experienced travelers & use Tours by Locals
                      exclusively. With 20+ tours in the past 3 years, Stan is
                      by far the best guide we have had. His depth of knowledge
                      is unprecedented (2 Masters + a PhD in history) but his
                      tours are a free flowing discussion – not a pre scripted
                      lecture. He is flexible, easy to talk to and is fun to be
                      with. On our way back to Paris, Stan stopped in a small
                      town, bought meats, cheeses, bread and cider and treated
                      us to an unscheduled picnic. This says it all about Stan!”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Steven</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <figure className="mt-10">
                  <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                    <p>
                      “Another great tour with Stanislas! Our family used him
                      for two private tours in the region and we were not
                      disappointed. It was very interesting and informative to
                      hear a local’s take of the region’s rich history and
                      aftermath of the war. Stanislas also brought us to some
                      off the beaten path sites that we would not have gotten to
                      see had we not toured with a local. Thank you for a lovely
                      tour!”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">
                        Bernadett
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          <section className="relative isolate overflow-hidden px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <figure className="mt-10">
                  <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                    <p>
                      “Stan was a wealth of information. With his PhD in history
                      and his teaching experience he was able to take us on a
                      deep dive into all the Normandy Beaches. We’ve been to
                      Normandy 4 times and he managed to take us places we had
                      never been to!”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Georgia</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-center py-10">
          <h1 className="text-3xl mb-5 font-bold">Book your tour now!</h1>
          <a
            href="/tour"
            className="bg-orange-500 text-white text-xl text-center font-medium px-4 py-1 rounded-xl shadow border-white border-2 hover:bg-white hover:text-orange-500 hover:border-orange-500"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  );
}
