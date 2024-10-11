export default function Client() {
  return (
    <>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
            Find your New or Pre-Owned Porsche.
          </h1>

          <p className="mt-6 text-gray-500">
            Helping you find your dream Porsche. Locate your nearest Porsche
            Centre and explore the range of New and Pre-Owned vehicles.
          </p>

          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md focus-within:border-porsche focus-within:ring focus-within:ring-porsche focus-within:ring-opacity-40">
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-4 py-2 m-1 text-porsche placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-porsche focus:outline-none focus:bg-porsche"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-14 text-gray-500 fill-current pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/id/thumb/9/95/Rolex_logo.svg/800px-Rolex_logo.svg.png"
              ></img>
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-14 text-gray-500 fill-current pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/de/thumb/9/91/Michelin_Logo.svg/1200px-Michelin_Logo.svg.png?20071216224138"
              ></img>
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-10 text-gray-500 fill-current pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Volkswagen_Group.svg/744px-Volkswagen_Group.svg.png"
              ></img>
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
              <img
                className="h-14 text-gray-500 fill-current pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/de/thumb/1/1d/Emirates_Logo.svg/1200px-Emirates_Logo.svg.png"
              ></img>
            </div>

            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <img
                className="h-12 text-gray-500 fill-current pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Puma-logo-%28text%29.svg/2560px-Puma-logo-%28text%29.svg.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
