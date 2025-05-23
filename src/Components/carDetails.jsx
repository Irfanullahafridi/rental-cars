import { useLocation } from "react-router-dom";

const CarDetails = () => {
  const location = useLocation();
  const car = location.state?.car;

  if (!car) return <p className="text-center text-red-500">Car not found. Please go back and try again.</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{car.name}</h2>
      <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p><strong>Type:</strong> {car.type}</p>
      <p><strong>Transmission:</strong> {car.transmission}</p>
      <p><strong>Seats:</strong> {car.seats}</p>
      <p><strong>Rating:</strong> {car.rating} ({car.reviews} reviews)</p>
      <p><strong>Price:</strong> {car.price}</p>
    </div>
  );
};

export default CarDetails;
