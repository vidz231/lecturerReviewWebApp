import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenLogin from "./layout/ScreenLogin/ScreenLogin";
import ScreenRegister from "./layout/ScreenRegister/ScreenRegister";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenLogin />} />
          <Route path="/login" element={<ScreenLogin />} />
          <Route path="/register" element={<ScreenRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
