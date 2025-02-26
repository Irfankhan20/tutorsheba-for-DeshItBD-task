import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import TutionJobs from "../pages/tuitionJobs/TutionJobs";

import TutorRequest from "../pages/tutorRequest/TutorRequest";
import Courses from "../pages/courses/Courses";
import PremiumTutors from "../pages/premiumTutors/PremiumTutors";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tutionJobs",
        element: <TutionJobs></TutionJobs>,
      },
      {
        path: "/premiumTutors",
        element: <PremiumTutors></PremiumTutors>,
      },
      {
        path: "/tutorRequest",
        element: <TutorRequest></TutorRequest>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
