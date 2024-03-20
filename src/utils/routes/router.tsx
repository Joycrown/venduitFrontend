import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRoute";
import { privateRoutes } from "./privateRoute";



export default function Routers() {
  // const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
      
        {privateRoutes.map(({ route, page }) => {
          return <Route key={route} path={route} element={page} />;
        })}
        {publicRoutes.map(({ route, page }) => {
          return <Route key={route} path={route} element={page} />;
        })}

        <Route path="/*" />
      </Routes>
    </BrowserRouter>
  );
}
