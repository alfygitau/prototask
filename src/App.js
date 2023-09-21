import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Laboratory from "./pages/laboratory/Laboratory";
import Patients from "./pages/patients/Patients";
import Messages from "./pages/messages/Messages";
import Pharmacy from "./pages/pharmacy/Pharmacy";
import Schedule from "./pages/schedule/Schedule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
