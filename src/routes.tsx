import { createBrowserRouter } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import InvolvedPage from "./pages/InvolvedPage";
import LeadershipPage from "./pages/LeadershipPage";
import SermonsPage from "./pages/SermonsPage";
import TestimonialPage from "./pages/TestimonialPage";
import WhatweDoPage from "./pages/WhatweDoPage";
import GivePage from "./pages/GivePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "contact", element: <ContactUsPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "involved", element: <InvolvedPage /> },
      { path: "leadership", element: <LeadershipPage /> },
      { path: "sermons", element: <SermonsPage /> },
      { path: "testimonial", element: <TestimonialPage /> },
      { path: "what-we-do", element: <WhatweDoPage /> },
      { path: "give", element: <GivePage /> },
      { path: "terms-and-conditions", element: <GivePage /> },
    ],
  },
]);

export default router;
