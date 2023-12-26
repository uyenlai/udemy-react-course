export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places!");
  }
  return resData.places;
}

export async function fetchSelectedPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch selected places!");
  }
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
