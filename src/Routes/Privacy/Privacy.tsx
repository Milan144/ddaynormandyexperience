import React from "react";

export default function Privacy() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <section className="mt-6 text-base leading-7 text-gray-600">
            <h2 className="text-2xl font-semibold text-orange-600">
              Introduction
            </h2>
            <p>
              We are committed to protecting your personal information and your
              right to privacy. This Privacy Policy explains what information we
              collect, how we use it, and what rights you have in relation to
              it.
            </p>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Information We Collect
            </h2>
            <p>
              We collect the following information when you use our service:
            </p>
            <ul className="list-disc pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              How We Use This Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5">
              <li>Process your bookings</li>
              <li>Communicate with you regarding your bookings</li>
              <li>Improve our services</li>
            </ul>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Legal Basis for Processing
            </h2>
            <p>
              We process your personal data based on your consent, which you
              provide by submitting our booking form.
            </p>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Data Storage and Protection
            </h2>
            <p>
              We take appropriate security measures to protect your personal
              data from unauthorized access, alteration, or destruction.
            </p>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Sharing of Data
            </h2>
            <p>
              We do not share your personal data with third parties unless
              required by law.
            </p>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5">
              <li>Access your personal data</li>
              <li>Request rectification of incorrect data</li>
              <li>Request deletion of your data</li>
              <li>Object to the processing of your data</li>
            </ul>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Exercising Your Rights
            </h2>
            <p>
              To exercise any of these rights, please contact us at
              ddaynormandyexperience@gmail.com .
            </p>
          </section>
          <section className="mt-4 mb-6">
            <h2 className="text-2xl font-semibold text-orange-600">
              Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at ddaynormandyexperience@gmail.com .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}