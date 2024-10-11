// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <div className="relative flex" id="About">
      <div className="min-h-screen lg:w-1/3"></div>
      <div className="hidden w-3/4 min-h-screen bg-gray-100 lg:block"></div>

      <div className="container flex flex-col justify-center w-full min-h-screen max-w-screen-xl px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
          What is <span className="text-porsche">PORSCHE</span> <br /> and who
          are they?
        </h1>

        <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
          <img
            className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96 pointer-events-none"
            src="https://car-brand-names.com/wp-content/uploads/2015/03/Porsche-symbol-720x540.jpg"
            alt="Customer testimonial"
          />

          <div className="mt-8 lg:px-10 lg:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800  lg:w-72">
              Help us improve our productivity
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 ">
              &quot; <span className="text-porsche">Porsche</span> is a brand
              that combines innovation, technology, and iconic design with a
              focus on high performance. It’s not just about speed, but also
              about premium quality, exceptional driving experiences, and
              luxury. Our long-term vision emphasizes sustainability, with a
              focus on electrification and continuous innovation, all while
              preserving the sportiness and exclusivity that defines Porsche.
              &quot;
            </p>

            <h3 className="mt-6 text-lg font-medium text-porsche">
              Oliver Blume
            </h3>
            <p className="text-gray-600 ">CEO of Porsche AG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
