import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
