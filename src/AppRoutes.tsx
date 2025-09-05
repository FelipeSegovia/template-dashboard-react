import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<h1 className="text-3xl font-bold underline">Home</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
