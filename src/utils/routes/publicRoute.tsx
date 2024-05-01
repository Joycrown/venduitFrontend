
import ForgetPassword from "../../containers/ForgetPassword/ForgetPassword";
import LoginPage from "../../containers/LoginPage/LoginPage";
import ResetPassword from "../../containers/ResetPassword/ResetPassword";
import SignupPage from "../../containers/SignupPage/SignupPage";
import LandingPage from "../../containers/landingPage/LandingPage";
import { RoutePaths } from "./routePaths";


export const publicRoutes = [
  {
    route: RoutePaths.BASE_URL,
    page: <LandingPage/>,
  },
  {
    route: RoutePaths.SIGNUP,
    page: <SignupPage/>,
  },
  {
    route: RoutePaths.LOGIN,
    page: <LoginPage/>,
  },
  {
    route: RoutePaths.FORGOT_PASSWORD,
    page: <ForgetPassword/>,
  },
  {
    route: RoutePaths.SET_PASSWORD,
    page: <ResetPassword/>,
  },

  
  
  

];
