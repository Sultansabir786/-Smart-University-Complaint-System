// App.jsx - Using Nested Routes with Layout (Outlet pattern)
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/about/About";
import Layout from "./pages/Layout/Layout";
import Start from "./pages/start/Start";
import SignUp from "./pages/form/SignUP";
import LogIn from "./pages/form/LogIn";
import Overview from "./pages/home/about/pages/Overview";
import History from "./pages/home/about/pages/History";
import Mission from "./pages/home/about/pages/Mission";
import Leadership from "./pages/home/about/pages/Leadership";
import Campus from "./pages/home/about/pages/Campus";
import Accreditation from "./pages/home/about/pages/Accreditation";

// services.jsx
import StudentServices from "./pages/home/servicess/pages/StudentServices";
import AdministrativeServices from "./pages/home/servicess/pages/AdministrativeServices";
import ITServices from "./pages/home/servicess/pages/ITServices";
import LibraryServices from "./pages/home/servicess/pages/LibraryServices";
import CareerServices from "./pages/home/servicess/pages/CareerServices";
import AcademicServices from "./pages/home/servicess/pages/AcademicServices";

// Announcement Pages
import Announcements from "./pages/home/announcements/pages/Announcements";
import LatestNews from "./pages/home/announcements/pages/LatestNews";
import Events from "./pages/home/announcements/pages/Events";
import Notices from "./pages/home/announcements/pages/Notices";
import Results from "./pages/home/announcements/pages/Results";

// Help Pages
import FAQ from "./pages/home/help/pages/FAQ";
import Guidelines from "./pages/home/help/pages/Guidelines";
import ComplaintProcess from "./pages/home/help/pages/ComplaintProcessPage";
import RequiredDocuments from "./pages/home/help/pages/RequiredDocuments";
import ContactSupport from "./pages/home/help/pages/ContactSupport";
import ComplaintProcessPage from "./pages/home/help/pages/ComplaintProcessPage";
import ComplaintForm from "./pages/form/ComplaintForm";
import Readmore from "./pages/home/readmore/Readmore";
import MyComplaints from "./pages/home/page/MyComplaints";
import ProtectedRoute from "./pages/protectRoutes/ProtectedRoute";
import ViewDetail from "./pages/home/page/ViewDetail";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="logIn" element={<LogIn />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ComplaintForm" element={<ComplaintForm />} />
          <Route path="readmore" element={<Readmore />} />
          <Route path="mycomplaints" element={<MyComplaints />} />
          <Route path="/dashboard/complaint/:id" element={<ViewDetail />} />
        </Route>
      </Route>
      <Route path="/about" element={<Layout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="history" element={<History />} />
        <Route path="mission" element={<Mission />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="campus" element={<Campus />} />
        <Route path="accreditation" element={<Accreditation />} />
      </Route>

      {/* services Routes with Layout */}
      <Route path="/servicess" element={<Layout />}>
        <Route path="academic" element={<AcademicServices />} />
        <Route path="student" element={<StudentServices />} />
        <Route path="administrative" element={<AdministrativeServices />} />
        <Route path="it" element={<ITServices />} />
        <Route path="library" element={<LibraryServices />} />
        <Route path="career" element={<CareerServices />} />
      </Route>

      {/* Announcements Routes with Layout */}
      <Route path="/announcements" element={<Layout />}>
        <Route index element={<Announcements />} />
        <Route path="news" element={<LatestNews />} />
        <Route path="events" element={<Events />} />
        <Route path="notices" element={<Notices />} />
        <Route path="results" element={<Results />} />
      </Route>
      <Route path="/help" element={<Layout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="guidelines" element={<Guidelines />} />
        <Route path="process" element={<ComplaintProcessPage />} />
        <Route path="documents" element={<RequiredDocuments />} />
        <Route path="contact" element={<ContactSupport />} />
      </Route>
    </Routes>
  );
};

export default App;
