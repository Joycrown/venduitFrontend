// import { Navigate, Route, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../services/store';




// const PrivateRoute = ({ element, ...rest }:any) => {
//   const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? element : <Navigate to="/login" replace />}
//     />
//   );
// };

// export default PrivateRoute;