import { useState} from "react";
import { FaStar, FaRegStar, FaHeart, FaInfoCircle } from "react-icons/fa";
import corollaImg from "../images/toyota-corolla.avif";
import bmwImg from "../images/BMW-X5.jpg";
import explorerImg from "../images/Ford-explorer.avif";
import civicImg from "../images/Honda-civic.jpg";
import nissanImg from "../images/Nissan-Petrol.avif";
import kiaImg from "../images/Hilux.avif";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const navigate = useNavigate();

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [carType, setCarType] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoriteCars");
    return saved ? JSON.parse(saved) : [];
  });

  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("carRatings");
    return saved ? JSON.parse(saved) : {};
  });

  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      type: "Economy",
      price: "$45/day",
      image: corollaImg,
      rating: 4.7,
      reviews: 128,
      transmission: "Automatic",
      seats: 4,
    },
    {
      id: 2,
      name: "BMW X5",
      type: "Luxury",
      price: "$120/day",
      image: bmwImg,
      rating: 4.9,
      reviews: 212,
      transmission: "Automatic",
      seats: 5,
    },
    {
      id: 3,
      name: "Ford Explorer",
      type: "SUV",
      price: "$75/day",
      image: explorerImg,
      rating: 4.6,
      reviews: 98,
      transmission: "Automatic",
      seats: 7,
    },
    {
      id: 4,
      name: "Honda Civic",
      type: "Economy",
      price: "$50/day",
      image: civicImg,
      rating: 4.5,
      reviews: 115,
      transmission: "Manual",
      seats: 4,
    },
    {
      id: 5,
      name: "Nissan",
      type: "Economy",
      price: "$50/day",
      image: nissanImg,
      rating: 4.2,
      reviews: 75,
      transmission: "Automatic",
      seats: 4,
    },
    {
      id: 6,
      name: "Hilux",
      type: "Economy",
      price: "$50/day",
      image: kiaImg,
      rating: 4.3,
      reviews: 90,
      transmission: "Manual",
      seats: 4,
    },
  ];

  const handleSearch = () => {
    const results = cars.filter((car) => {
      return carType === "" || car.type === carType;
    });
    setFilteredCars(results);
  };

  const displayCars = filteredCars.length > 0 ? filteredCars : cars;

  const handleRentNow = (car) => {
    if (!pickupDate || !returnDate) {
      alert("Please select both Pickup and Return dates.");
      return;
    }

    navigate("/Checkout", {
      state: {
        car,
        pickupDate,
        returnDate,
      },
    });
  };

  const toggleFavorite = (carId) => {
    setFavorites((prev) => {
      const updated = prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId];
      localStorage.setItem("favoriteCars", JSON.stringify(updated));
      return updated;
    });
  };

  const handleRatingChange = (carId, newRating) => {
    setRatings((prev) => {
      const updated = { ...prev, [carId]: newRating };
      localStorage.setItem("carRatings", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-sans text-center mb-10 text-gray-800">
        Available Cars
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-10 max-w-4xl mx-auto grid md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Pickup Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Car Type</label>
          <select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">All</option>
            <option value="Economy">Economy</option>
            <option value="Luxury">Luxury</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Search Vehicles
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayCars.map((car) => (
          <div
            key={car.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-purple-300"
          >
            <div className="absolute top-3 left-3 bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full font-medium shadow">
              {car.type}
            </div>

            <div
              className="absolute top-3 right-3 text-red-500 cursor-pointer transition"
              onClick={() => toggleFavorite(car.id)}
            >
              <FaHeart
                size={18}
                className={favorites.includes(car.id) ? "text-red-600" : "text-gray-300"}
              />
            </div>

            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-3">
              <h2 className="text-base font-semibold text-gray-800">{car.name}</h2>
              <p className="text-xs text-gray-500 mt-1">
                {car.transmission} | {car.seats} Seats
              </p>

              <div className="flex items-center mt-2 text-yellow-500 text-xs">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < (ratings[car.id] || Math.round(car.rating))
                    ? (
                      <FaStar
                        key={i}
                        onClick={() => handleRatingChange(car.id, i + 1)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaRegStar
                        key={i}
                        onClick={() => handleRatingChange(car.id, i + 1)}
                        className="cursor-pointer"
                      />
                    )
                )}
                <span className="ml-2 text-gray-600">
                  {ratings[car.id] || car.rating} ({car.reviews})
                </span>
              </div>

              <div className="text-indigo-600 font-bold text-lg mt-2">
                {car.price}
              </div>

              <div className="flex mt-3 gap-2">
                <button
                  onClick={() => handleRentNow(car)}
                  className="flex-1 bg-gradient-to-r cursor-pointer from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition"
                >
                  Rent Now
                </button>
                <button
                  onClick={() => navigate(`/cars/${car.id}`, { state: { car } })}
                  className="flex items-center justify-center flex-1 border border-gray-300 cursor-pointer hover:bg-gray-100 px-3 py-1.5 rounded-lg text-sm text-gray-700 transition"
                >
                  <FaInfoCircle className="mr-1 text-gray-500" />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
