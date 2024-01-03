import {
  createBrowserRouter,
  RouterProvider,
  //createRoutesFromElements,
  //Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  // const routeDefinitions = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/products" element={<Products />} />
  //   </Route>
  // );
  //const router = createBrowserRouter(routeDefinitions);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
