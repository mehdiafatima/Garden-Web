const About = () => {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About Garden Haven</h1>
        <p className="text-lg mb-4">
          At Garden Haven, we believe that everyone can cultivate a slice of nature in their own backyard. 
          Our mission is to inspire and empower individuals to create beautiful, sustainable gardens that enhance their outdoor spaces and contribute to a healthier planet.
        </p>
  
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide accessible gardening resources, tips, and ideas that help you connect with nature. 
          Whether youre a beginner or an experienced gardener, we strive to offer valuable insights that nurture your gardening journey.
        </p>
  
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">🌱 Sustainability: We advocate for eco-friendly gardening practices that benefit the environment.</li>
          <li className="mb-2">🌼 Community: We aim to build a supportive community of garden enthusiasts.</li>
          <li className="mb-2">🌷 Creativity: We encourage unique and creative approaches to gardening.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2023, Garden Haven began as a small community project to share gardening knowledge and resources. 
          Over the years, we have grown into a thriving online platform where gardeners of all levels can connect, learn, and share their experiences.
        </p>
  
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Join Us</h2>
        <p className="mb-4">
          Join us on this beautiful journey of gardening! Explore our tips, share your own experiences, and let’s grow together. 
          Sign up for our newsletter to receive the latest gardening tips and exclusive offers!
        </p>
  
        <div className="flex justify-center">
          <a href="/." className="px-6 py-3 bg-green-700 hover:bg-green-600 rounded-md text-lg font-semibold text-white transition duration-300">
            Subscribe Now
          </a>
        </div>
      </div>
    );
  };
  
  export default About;
  