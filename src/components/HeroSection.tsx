export default function HeroSection() {
    return (
      <section className="flex flex-col md:flex-row items-center bg-white h-screen p-8">
        <div className="md:w-1/2 text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Welcome to Garden Haven🍀
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Discover the beauty of nature in your own backyard. From sustainable
            gardening tips to creative decor ideas, we help you cultivate a garden
            that reflects your unique style and care for the environment.
          </p>
          <div className="flex gap-4">
            <a
              href="/plantcare"
              target="_parent"
              className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white rounded-md text-lg font-semibold transition duration-300"
            >
              Get Gardening Tips
            </a>
            <a
              href="/gardendecor"
              target="_parent"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-white rounded-md text-lg font-semibold transition duration-300"
            >
              Explore Decor Ideas
            </a>
          </div>
        </div>
  
       
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://media.istockphoto.com/id/157442317/photo/garden-at-night.jpg?s=612x612&w=0&k=20&c=hwbGDLRlUuOhFb8cBpnU6kdNyrV7YYbLW2Y_A3zySiE="
            alt="Beautiful Garden"
            className="rounded-lg shadow-lg max-w-full h-auto ml-40"
          />
        </div>
      </section>
    );
  }
  