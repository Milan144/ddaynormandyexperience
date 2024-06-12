import React from 'react';
import { useParams } from 'react-router-dom';

// Array with 9 objects
// Each object has title, overview, itinerary, duration, rate
let tours = [
    {
        title: "D-Day Landing Tour",
        overview: "This tour will take you to the most important D-Day sites in Normandy.",
        itinerary: "This tour will take you to the most important D-Day sites in Normandy.",
        duration: "8 hours",
        rate: "$100"
    },
]

export default function TourDetails() {
    let { i } = useParams();
    if (i === undefined) {
        return <h1>404 page not found</h1>;
    }

    return (
      <div>
        <h1>{tours[i].title}</h1>
        <p>{tours[i].overview}</p>
        <p>{tours[i].itinerary}</p>
        <p>{tours[i].duration}</p>
        <p>{tours[i].rate}</p>
      </div>
    );
}
