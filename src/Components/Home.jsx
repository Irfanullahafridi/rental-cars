import bgImage from "../images/bg2.jpeg";
import Cars from "./Cars";
import About from "./About";
import Contact from "./Contact";

const Home = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        width: "100%",
      }}
      className="relative"
    >
      <div className="absolute inset-0  bg-opacity-50 z-0" />
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start h-full px-6 md:px-16 py-12 text-white">
        
        <div className="lg:w-1/2 max-w-2xl mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Find, book and rent a car <span className="text-purple-500">Easily</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Get a car wherever and whenever you need it with your iOS and Android device.
          </p>
          <a href="/Cars">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-3 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105">
              Explore Cars
            </button>
          </a>
        </div>

      </div>
      <Cars/>
      <About/>
      <Contact/>
    </div>

    
  );
};

export default Home;