// eslint-disable-next-line no-unused-vars
import React from "react";

const ProductList = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Porsche Models</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large item */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="../src/assets/porsche-onroad.jpg"
              alt="Nature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">Porsche 911</h3>
                <p className="text-white">
                  The iconic, rear-engine sports car with exceptional
                  performance.
                </p>
              </div>
            </div>
          </div>

          {/* Two small items */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">
            <img
              src="../src/assets/porsche-turbo-s.webp"
              alt="Food"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche Taycan
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="../src/assets/porsche-718.webp"
              alt="Technology"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche 718
                </h4>
              </div>
            </div>
          </div>

          {/* Three medium items */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">
            <img
              src="../src/assets/porsche-panamera.webp"
              alt="Travel"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche Panamera
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">
            <img
              src="../src/assets/porsche-macan.webp"
              alt="Art"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche Macan
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/j1-2nd-taycan-4-cross-turismo-modelimage-sideshot/thumbwhite/7c44b0ae-c118-11ee-8116-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
              alt="Travel"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche Taycan Turismo
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/982-718spyder-rs-modelimage-sideshot/model/1c37e5df-f334-11ed-8103-005056bbdc38/porsche-model.png"
              alt="Art"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche Spyder
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/982-718-c7s-modelimage-sideshot/thumbwhite/c479e09b-d5ba-11ec-80ef-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
              alt="Travel"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche Cayman
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-modelimage-sideshot/thumbwhite/93fa2a92-fee1-11ed-8103-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
              alt="Art"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-semibold text-white">
                  Porsche Boxster
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
