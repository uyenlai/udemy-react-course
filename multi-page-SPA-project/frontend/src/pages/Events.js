import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isTrue) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  return <EventsList events={events} />;
}
export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return { isError: true, message: "Could not fetch events!" };
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 201,
    });
  } else {
    return response;
  }
}
