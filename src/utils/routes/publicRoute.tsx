
import ForgetPassword from "../../containers/ForgetPassword/ForgetPassword";
import LoginPage from "../../containers/LoginPage/LoginPage";
import ResetPassword from "../../containers/ResetPassword/ResetPassword";
import SignupPage from "../../containers/SignupPage/SignupPage";
import LandingPage from "../../containers/landingPage/LandingPage";
import { RoutePaths } from "./routePaths";
// import MakePayment from "../../components/Modal/MakePayment";
// import { RoutePaths } from "../../components/VendorExplore/routePaths";
// import VendorDetail from "../../components/Modal/VendorDetail";
// import ProductDetail from "../../components/Modal/ProductDetail";
// import PaymentSuccessful from "../../components/Modal/PaymetSuccessful";
import DisputeNotification from "../../components/Modal/DisputeNotification";
import NonVendor from "../../components/Modal/NonVendor";
import RaiseDispute from "../../components/Modal/RaiseDispute";
import VendorExplore from "../../components/VendorExplore/VendorPages/VendorExplore";
import VendorReputaion from "../../components/VendorExplore/VendorPages/VendorReputation";
import VendorResult from "../../components/VendorExplore/VendorPages/VendorResult";
import CategoryList from "../../components/VendorExplore/CategoryList";
// import Cart from "../../components/VendorExplore/Cart";
// import SaveItem from "../../components/VendorExplore/SaveItem";
// import Notification from "../../components/VendorExplore/Notification"

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
  // {
  //   route: RoutePaths.CART,
  //   page: <Cart/>,
  // },
  // {
  //   route: RoutePaths.SAVE,
  //   page: <SaveItem/>,
  // },
  // {
  //   route: RoutePaths.NOTIFICATION,
  //   page: <Notification/>,
  // },
  
  

];
