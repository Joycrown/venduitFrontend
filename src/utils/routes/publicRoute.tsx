
import ForgetPassword from "../../containers/ForgetPassword/ForgetPassword";
import LoginPage from "../../containers/LoginPage/LoginPage";
import ResetPassword from "../../containers/ResetPassword/ResetPassword";
import SignupPage from "../../containers/SignupPage/SignupPage";
import LandingPage from "../../containers/landingPage/LandingPage";
import MakePayment from "../../components/Modal/MakePayment";
import { RoutePaths } from "./routePaths";
import VendorDetail from "../../components/Modal/VendorDetail";
import ProductDetail from "../../components/Modal/ProductDetail";
import PaymentSuccessful from "../../components/Modal/PaymetSuccessful";
import DisputeNotification from "../../components/Modal/DisputeNotification";

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

  {
    route: RoutePaths.MAKE_PAYMENT,
    page: <MakePayment/>,
  },
  {
    route: RoutePaths.VENDOR_DETAILS,
    page: <VendorDetail/>,
  },
  {
    route: RoutePaths.PRODUCT_DETAILS,
    page: <ProductDetail/>,
  },
  {
    route: RoutePaths.PAYMENT_SUCCESSFUL,
    page: <PaymentSuccessful/>,
  },
  {
    route: RoutePaths.DISPUTE_NOTIFICATION,
    page: <DisputeNotification/>,
  },
  
  

];
