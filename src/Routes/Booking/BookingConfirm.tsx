import React from "react";
import { useParams } from "react-router-dom";
import { ToursData } from "../../Components/ToursData.ts";

export default function BookingConfirm() {
  const { id } = useParams<{ id: string }>();
  const { date } = useParams<{ date: string }>();
  const { number } = useParams<{ number: string }>();
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-orange-500">Thank you!</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Booking request confirmation
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Your booking request for {ToursData[id]?.title} on {date} for {number} people has been received. You will be contacted soon by email to talk about your request.{" "}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
