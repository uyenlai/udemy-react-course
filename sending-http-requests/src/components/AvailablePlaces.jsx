import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        setIsFetching(true);
        const response = await fetch("http://localhost:3000/places");

        if (!response.ok) {
          throw new Error("Failed to fetch places!");
        }

        const resData = await response.json();
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places. Please try again later!",
        });
      }
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    console.log(error);
    return <Error title="An error occured!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
