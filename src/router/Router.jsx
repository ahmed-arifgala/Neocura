import React from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBlogs from "../components/BlogScreens/allBlogs/AllBlogs";
import SingleBlog from "../components/BlogScreens/SingleBlog/SingleBlog";
import Home from "../components/Home/Home";
import BookAppointment from "../components/BookAppointment/BookAppointment";
import LoginPage from "../components/EntryScreens/LoginPage/LoginPage";
import SignupPage from "../components/EntryScreens/SignupPages/SignupPage";
import ResetPass from "../components/EntryScreens/ResetPassword/resetPass";
import DoctorSignUp from "../components/EntryScreens/SignupPages/DoctorSignUp/DoctorSignUp";
import PatientSignUp from "../components/EntryScreens/SignupPages/PatientSignUp/PatientSignUp";
// import DoctorList from "../containers/DoctorList/DoctorList";
import VideoConsultation from "../components/VideoConsultaion/VideoConsultation";
import PatientDashboard from "../components/Dashboards/Patient/Patient";
import DoctorDashboard from "../components/Dashboards/Doctor/Doctor";
import AdminDashboard from "../components/Dashboards/Admin/Admin";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Hospital, {
  loader as HospitalLoader,
} from "../components/Hospital/Hospital";
import DoctorList, {
  loader as IndivDocLoader,
} from "../containers/DoctorList/DoctorList";
import Doctor, { loader as DocLoader } from "../components/Doctor/Doctor";
import ErrorPage from "../UI/ErrorPage/ErrorPage";
import Layout from "../hoc/Layout/Layout";
import CompleteList, {
  loader as CompleteListLoader,
} from "../components/CompleteList/CompleteList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "Doctor/:leftItem/:rightItem/:cityName",
        element: <Doctor />,
        loader: DocLoader,
      },
      {
        path: "Doctor/:leftItem/:rightItem/:cityName/:docId",
        element: <DoctorList />,
        loader: IndivDocLoader,
      },
      {
        path: ":toolbarName/:leftItem/:rightItem",
        element: <Hospital />,
        loader: HospitalLoader,
      },
      {
        path: "CompleteList/:toolBarName/:leftItem",
        element: <CompleteList />,
        loader: CompleteListLoader,
      },
      { path: "/:id/booking", element: <BookAppointment /> },
      {
        path: "/patient/:slug/dashboard/*",
        element: localStorage.getItem("accessToken") ? (
          <PatientDashboard />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
      {
        path: "/doctor/:slug/dashboard/*",
        element: localStorage.getItem("accessToken") ? (
          <DoctorDashboard />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
      {
        path: "/admin/:slug/dashboard/*",
        element: localStorage.getItem("accessToken") ? (
          <AdminDashboard />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
      { path: "/videoConsultation", element: <VideoConsultation /> },
      { path: "/blogs", element: <AllBlogs /> },
      { path: "/blogs/:id", element: <SingleBlog /> },
    ],
  },

  { path: "/signup", element: <SignupPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/resetPassword", element: <ResetPass /> },
  { path: "/signup/doctor", element: <DoctorSignUp /> },
  { path: "/signup/patient", element: <PatientSignUp /> },
]);


export default Router;
