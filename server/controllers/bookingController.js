import Booking from "../models/Booking.js";
import Car from "../models/Car.js";

// check availability of the car for a given date
const checkAvailability = async (car, pickupDate, returnDate) => {
  const bookings = await Booking.find({
    car,
    pickupDate: { $lte: returnDate },
    returnDate: { $gte: pickupDate },
  });
  //   car is avaialable
  return bookings.length === 0;
};

// check availability of the car for a given date and location giving from the home part
export const checkAvailabilityOfCar = async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;
    // get all car list that has is availabilty is true
    const cars = await Car.find({ location, isAvailable: true });
    // check car availability for the given date range using promise
    const availablecarPromise = cars.map(async (car) => {
      const isAvailable = await checkAvailability(
        car._id,
        pickupDate,
        returnDate
      );
      return { ...car._doc, isAvailable: isAvailable };
    });

    let availableCars = await Promise.all(availablecarPromise);
    availableCars = availableCars.filter((car) => car.isAvailable === true);

    res.json({ success: true, availableCars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// for create booking
export const createBooking = async (req, res) => {
  try {
    const { _id } = req.user;
    const { car, pickupDate, returnDate } = req.body;

    // giving the function checkAvailabilty car,pickupdate,returnDate based on the codition of length if tis is 0 then true else false
    const isAvailable = await checkAvailability(car, pickupDate, returnDate);
    if (isAvailable) {
      return res.json({ success: false, message: "Car is not available" });
    }
    // we will get car
    const carData = await Car.findById(car);
    // calculate the car price based on pickup and return date
    const picked = new Date(pickupDate);
    const returned = new Date(returnDate);
    // Calculate the total number of days between returnDate and picked.
    // (returnDate - picked) → gives difference in milliseconds.
    // Divide by (1000 * 60 * 60 * 24) → converts milliseconds into days.
    // Math.ceil(...) → rounds up so partial days count as a full day (e.g., 3.2 days → 4 days).
    const noOfDays = Math.ceil((returnDate - picked) / (1000 * 60 * 60 * 24));
    const price = carData.pricePerDay * noOfDays;

    await Booking.create({
      car,
      owner: carData.owner,
      user: _id,
      pickupDate,
      returnDate,
      price,
    });

    res.json({ success: true, message: "Booking Created" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// list user Booking
export const getUserBooking = async (req, res) => {
  try {
    const { _id } = req.user;
    // Find all bookings for the logged-in user, populate car details,
    // and sort the results by createdAt in descending order (newest first)
    const bookings = await Booking.find({ user: _id })
      .populate("car")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
