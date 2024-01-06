import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEvent,
} from "./pages/EventDetail";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import RootEventsPage from "./pages/RootEventsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <RootEventsPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "/events/:eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              {
                path: "/events/:eventId/edit",
                element: <EditEventPage />,
              },
            ],
          },

          {
            path: "/events/new",
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
