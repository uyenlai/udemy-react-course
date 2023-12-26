export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");

  if (!response.ok) {
    throw new Error("Failed to fetch places!");
  }
  const resData = await response.json();
  return resData.places;
}

export async function updateSelectedPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ places }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch places!");
  }
  const resData = await response.json();
  return resData.message;
}
