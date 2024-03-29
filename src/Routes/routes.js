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

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Checkout from "../Pages/Checkout/Checkout";
import Quantity from "../Pages/Quantity/Quantity";

// Here are all the Routes this website can navigate to
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route
        path="/"
        element={<Home />}
        loader={() =>
          fetch("https://backend-fahimfaisalkhan.vercel.app/services?limit=3")
        }
      />
      <Route
        path="/services"
        element={<Services />}
        loader={() =>
          fetch(
            `https://backend-fahimfaisalkhan.vercel.app/services?perPageItem=5&currentPage=0`
          )
        }
      />
      <Route
        path="/services/:id"
        element={<ServiceDetails />}
        loader={({ params }) =>
          fetch(
            `https://backend-fahimfaisalkhan.vercel.app/services/${params.id}`
          )
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
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/quantity/:id"
        loader={({ params }) =>
          fetch(
            `https://backend-fahimfaisalkhan.vercel.app/services/${params.id}`
          )
        }
        element={
          <PrivateRoute>
            <Quantity />
          </PrivateRoute>
        }
      />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);
