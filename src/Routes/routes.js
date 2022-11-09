import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        path="/"
        element={<Home />}
        loader={() => fetch("http://localhost:5000/services?limit=3")}
      />
      <Route
        path="/services"
        element={<Services />}
        loader={() =>
          fetch(`http://localhost:5000/services?perPageItem=5&currentPage=0`)
        }
      />
      <Route
        path="/services/:id"
        element={<ServiceDetails />}
        loader={({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`)
        }
      />
    </Route>
  )
);
