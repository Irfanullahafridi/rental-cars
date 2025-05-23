import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, pickupDate, returnDate } = location.state || {};
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 px-4">
        <div className="bg-white shadow-lg p-6 rounded-xl text-center text-red-600 text-lg font-semibold">
          No car selected. Please go back and choose a vehicle.
        </div>
      </div>
    );
  }

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-gradient-to-br from-purple-100 to-blue-200">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full transform transition duration-300 hover:scale-[1.01] hover:shadow-2xl">
        
        <div className="p-4 border-b border-gray-200 text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-2xl">
          <h2 className="text-xl font-semibold text-white">Checkout Summary</h2>
        </div>

        <div className="p-4 flex justify-center">
          <img
            src={car.image}
            alt={car.name}
            className="h-36 w-56 object-cover rounded-md shadow-md"
          />
        </div>

        <div className="px-6 pb-4 text-sm text-gray-700 space-y-1">
          <p><span className="font-semibold">Car:</span> {car.name}</p>
          <p><span className="font-semibold">Type:</span> {car.type}</p>
          <p><span className="font-semibold">Transmission:</span> {car.transmission}</p>
          <p><span className="font-semibold">Seats:</span> {car.seats}</p>
          <p><span className="font-semibold">Price:</span> {car.price}</p>
          <p><span className="font-semibold">Pickup Date:</span> {pickupDate}</p>
          <p><span className="font-semibold">Return Date:</span> {returnDate}</p>
        </div>

        <div className="px-6 pb-6 space-y-3">
          {!isConfirmed ? (
            <>
              <button
                onClick={handleConfirm}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 rounded-md text-sm font-semibold transition duration-300 shadow-md"
              >
                Confirm Booking
              </button>
              <button
                onClick={handleCancel}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-md text-sm font-semibold transition duration-300 shadow-sm"
              >
                Cancel Rent
              </button>
            </>
          ) : (
            <div className="text-green-600 text-center font-semibold animate-pulse">
              Booking Confirmed! Redirecting...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
