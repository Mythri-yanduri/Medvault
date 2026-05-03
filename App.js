import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorVerification from "./pages/DoctorVerification";
import DoctorRecords from "./pages/DoctorRecords";
import PatientRecords from "./pages/PatientRecords";
import AddRecord from "./pages/AddRecord";
import DoctorDetails from "./pages/DoctorDetails";
import SetPassword from "./pages/SetPassword";
import TotalDoctors from "./pages/TotalDoctors";
import TotalPatients from "./pages/TotalPatients";
import PatientProfile from "./pages/PatientProfile";
import BookAppointment from "./pages/BookAppointment";

import DoctorAppointments from "./pages/DoctorAppointments";

import PatientAppointments from "./pages/PatientAppointments";

import DoctorConsultedList from "./pages/DoctorConsultedList";
import PatientForConsultation from "./pages/PatientForConsultation";

import DoctorPayments from "./pages/DoctorPayments";

import PatientNotifications from "./pages/PatientNotifications";
import ConsultationHistory from "./pages/ConsultationHistory";
import ViewPrescription from "./pages/ViewPrescription";

import AdminPatientProfile from "./pages/AdminPatientProfile";

import AdminDoctorAnalytics from "./pages/AdminDoctorAnalytics";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


// ProtectedRoute: checks role stored in localStorage
function ProtectedRoute({ children, allowedRoles }) {
  const role = localStorage.getItem("role");
  if (!role) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/doctor/:id" element={<DoctorDetails />} />
        <Route path="/doctor/details/:id" element={<DoctorDetails />} />

        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />

        Doctor Dashboard
        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Patient Dashboard */}
        <Route
          path="/patient"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />

        {/* Doctor Pages */}
        <Route
          path="/doctor/records"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <DoctorRecords />
            </ProtectedRoute>
          }
        />

        {/* Patient Pages */}
        <Route
          path="/patient/records"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <PatientRecords />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-record"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <AddRecord />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Doctor Verification */}
        <Route
          path="/doctor-verify"
          element={
            <ProtectedRoute allowedRoles={["admin", "doctor"]}>
              <DoctorVerification />
            </ProtectedRoute>
          }
        />

        {/* Set Password Page */}
        <Route path="/set-password" element={<SetPassword />} />


        <Route path="/admin/total-doctors" element={<TotalDoctors />} />
        <Route path="/admin/total-patients" element={<TotalPatients />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/patient/book-appointment" element={<BookAppointment />} />
        {/* <Route path="/doctor/consult-list" element={<DoctorConsultList />} /> */}
        {/* <Route path="/doctor/consult/:patientId/:appointmentId" element={<PatientConsultDetails />} /> */}

        <Route path="/patient/appointments" element={<PatientAppointments />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />


        <Route path="/doctor/consult-list" element={<DoctorConsultedList />} />
        <Route
          path="/doctor/consult/:appointmentId/:patientId"
          element={<PatientForConsultation />}
        />

        <Route path="/doctor/payments" element={<DoctorPayments />} />

        <Route path="/patient/notifications" element={<PatientNotifications />} />

        <Route path="/patient/consultation-history" element={<ConsultationHistory />} />
        <Route path="/patient/prescription/:appointmentId" element={<ViewPrescription />} />


        <Route path="/admin/patient/:id" element={<AdminPatientProfile />} />

        <Route
          path="/admin/doctor/:id/analytics"
          element={<AdminDoctorAnalytics />}
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />


        <Route path="/reset-password" element={<ResetPassword />} />



        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
