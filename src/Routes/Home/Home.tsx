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
      <div className="col-span-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mt-10 lg:mt-0">
          Clients Testimonials
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <figure className="mt-10">
                <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                  <p>
                    “We had an amazing tour with Stanislas and found him to be
                    extremely engaging & a wonderful tour guide! Definitely book
                    him & you will not be disappointed! Stanislas was on time,
                    returned us to our ship on time, & was very considerate of
                    the mobility issues of my in-laws who were in their 80’s. We
                    managed to see, learn, & experience so much, yet we never
                    felt rushed. Truly exceptional guide!”
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
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <figure className="mt-10">
                <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                  <p>
                    “We were impressed by Stanislas’s extensive knowledge of the
                    sites we visited and the stamina required to get us to our
                    requested locations. It was a pleasure traveling with him!”
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
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <figure className="mt-10">
                <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                  <p>
                    “Stanislas was wonderful to spend the day with touring
                    Normandy and the D-Day sites & learning more of what
                    happened here 75 years ago! He offered historically accurate
                    details, as he is a French history professor. He was an
                    amazing driver also, as we never once felt unsafe! I felt
                    like we were touring with an accommodating friend, as the
                    day was so easy & comfortable! He showed us everything we
                    wanted to see & more & would recommend Stanislas to anyone
                    who is visiting Normandy or northern France!”
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
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <figure className="mt-10">
                <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                  <p>
                    “We are experienced travelers & use Tours by Locals
                    exclusively. With 20+ tours in the past 3 years, Stan is by
                    far the best guide we have had. His depth of knowledge is
                    unprecedented (2 Masters + a PhD in history) but his tours
                    are a free flowing discussion – not a pre scripted lecture.
                    He is flexible, easy to talk to and is fun to be with. On
                    our way back to Paris, Stan stopped in a small town, bought
                    meats, cheeses, bread and cider and treated us to an
                    unscheduled picnic. This says it all about Stan!”
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
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <figure className="mt-10">
                <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                  <p>
                    “Another great tour with Stanislas! Our family used him for
                    two private tours in the region and we were not
                    disappointed. It was very interesting and informative to
                    hear a local’s take of the region’s rich history and
                    aftermath of the war. Stanislas also brought us to some off
                    the beaten path sites that we would not have gotten to see
                    had we not toured with a local. Thank you for a lovely
                    tour!”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Bernadett</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <figure className="mt-10">
                <blockquote className="text-center font-semibold leading-8 text-gray-900 sm:leading-9">
                  <p>
                    “Stan was a wealth of information. With his PhD in history
                    and his teaching experience he was able to take us on a deep
                    dive into all the Normandy Beaches. We’ve been to Normandy 4
                    times and he managed to take us places we had never been
                    to!”
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
    </div>
  );
}
