import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
