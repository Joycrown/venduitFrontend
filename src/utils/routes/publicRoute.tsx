
import ForgetPassword from "../../containers/ForgetPassword/ForgetPassword";
import LoginPage from "../../containers/LoginPage/LoginPage";
import ResetPassword from "../../containers/ResetPassword/ResetPassword";
import SignupPage from "../../containers/SignupPage/SignupPage";
import LandingPage from "../../containers/landingPage/LandingPage";
import { RoutePaths } from "./routePaths";
import DisputeNotification from "../../components/Modal/DisputeNotification";
import NonVendor from "../../components/Modal/NonVendor";
import RaiseDispute from "../../components/Modal/RaiseDispute";
import VendorExplore from "../../components/VendorExplore/VendorExplore";
import VendorReputaion from "../../components/VendorExplore/VendorReputation";
import VendorResult from "../../components/VendorExplore/VendorResult";
import CategoryList from "../../components/VendorExplore/CategoryList";

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
    route: RoutePaths.DISPUTE_NOTIFICATION,
    page: <DisputeNotification/>,
  },
  {
    route: RoutePaths.NON_VENDOR,
    page: <NonVendor/>,
  },
  {
    route: RoutePaths.RAISE_DISPUTE,
    page: <RaiseDispute/>,
  },
  {
    route: RoutePaths.VENDOR_EXPLORE,
    page: <VendorExplore/>,
  },
  {
    route: RoutePaths.VENDOR_REPUTATION,
    page: <VendorReputaion/>,
  },
  {
    route: RoutePaths.VENDOR_RESULTS,
    page: <VendorResult/>,
  },
  {
    route: RoutePaths.CATEGORY_LIST,
    page: <CategoryList/>,
  },
  

];
