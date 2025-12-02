import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Contatti from "./pages/Contatti";
import DefaultLayout from "./layout/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contatti" element={<Contatti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
