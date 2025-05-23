import CarImage from "../images/aboutImg.png";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
     
      <div className="flex-grow px-6 py-12 flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={CarImage}
              alt="Rental Car"
              className="w-3/4 md:w-full max-w-md drop-shadow-xl"
            />
          </div>

          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About us
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              At DriveEase Rentals, we make car rentals simple, affordable, and
              reliable. Whether you're planning a weekend getaway, a business
              trip, or just need a temporary ride, our diverse fleet of
              well-maintained vehicles is ready to meet your needs.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              With a focus on customer satisfaction, transparent pricing, and 24/7
              support, we’re here to ensure your journey is smooth from start to
              finish. Discover the freedom of the road with DriveEase — where
              convenience meets quality.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
