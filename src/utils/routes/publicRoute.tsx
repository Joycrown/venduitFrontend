
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
