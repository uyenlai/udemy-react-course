import { useParams, Link } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      <Link to="/events">back</Link>
    </>
  );
}
