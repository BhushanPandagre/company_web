const Home = () => (
    <div 
      className="relative flex items-center justify-center h-screen text-center text-white bg-cover bg-center" 
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?t=st=1742894978~exp=1742898578~hmac=63531bb91c92645b21055a05ab9960b06786ac84b53526692f8bbc5441022468&w=1380')" }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 px-6">
        <h2 className="text-5xl font-extrabold drop-shadow-lg animate-fade-in">
          Empowering Your Business with Technology
        </h2>
        <p className="text-lg text-gray-200 mt-4 animate-fade-in delay-200">
          Providing innovative IT solutions to drive your success.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
  
  export default Home;
  