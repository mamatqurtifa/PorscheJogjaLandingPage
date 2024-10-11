// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
            There Is No Substitute
          </h1>
          <p className="mt-6 text-gray-500">
            Porsche delivers with a blend of performance, luxury, and timeless
            style.
          </p>
          <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-porsche rounded-lg hover:bg-red-600 lg:mx-0 lg:w-auto focus:outline-none">
            Find More
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-auto rounded-xl lg:w-4/5"
            src="https://images-porsche.imgix.net/-/media/329E707A3234485BBE98485116865780_E8DD4C47C7F14D41B61C1AE76B59FC1A_TA24Q3EIX0010-taycan-turbo-s-side?w=2560&h=697&q=45&crop=faces%2Centropy%2Cedges&auto=format"
            alt="App"
          />
        </div>
      </div>
    </section>
  );
}
