import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignInUser from "../Pages/SignInUser/SignInUser";
import SignUpUser from "../Pages/SignUpUser/SignUpUser";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

// Here are all the Routes this website can navigate to
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
      <Route path="/signup" element={<SignUpUser />} />
      <Route path="/signin" element={<SignInUser />} />
      {/* Below is the private route which an user can only access if logged in */}
      <Route
        path="/myreviews"
        element={
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        }
      />
      <Route
        path="/addservice"
        element={
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        }
      />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);
