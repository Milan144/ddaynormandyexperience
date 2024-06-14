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
      <h1>{tours[id].title}</h1>
      <p>{tours[id].overview}</p>
      <p>{tours[id].itinerary}</p>
      <p>
        THE FRENCH LAW REQUIRES TO INDICATE THE PRICES ON THE WEBSITE, BUT EACH
        TOUR IS ADAPTED ACCORDING TO YOUR REQUEST
      </p>
      <p>Duration: {tours[id].duration}</p>
      <p>Rate: {tours[id].rate}</p>
      <a
        href={"/tour/" + id + "/book"}
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      >
        Book now
      </a>
    </div>
  );
}
