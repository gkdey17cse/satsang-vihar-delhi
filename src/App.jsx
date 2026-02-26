// src/App.jsx
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation, // ADD THIS IMPORT
} from "react-router-dom";
import HomeSPA from "./pages/Home";
import HistoryPage from "./pages/HistoryPage";
import ConferenceDetailsPage from "./pages/conference/conference-du-2026";
import UtsavDelhi2026 from "./pages/utsav/utsav-delhi-2026";

function HashRedirector() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 1. Handle Old Hash Links (e.g., /#/conference)
    const hash = window.location.hash;
    if (hash && hash.startsWith("#/")) {
      const cleanPath = hash.replace("#/", "/");
      navigate(cleanPath, { replace: true });
    }

    // 2. Handle 404 Redirects from script (e.g., /?/conference)
    const query = window.location.search;
    if (query && query.startsWith("?/")) {
      const cleanPath = query.slice(2).replace(/~and~/g, "&");
      navigate(cleanPath, { replace: true });
    }
  }, [navigate, location]); // location added to dependency

  return null;
}

function App() {
  return (
    <Router>
      <HashRedirector />
      <Routes>
        <Route path="/" element={<HomeSPA />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/conference-du-2026" element={<ConferenceDetailsPage />} />
        <Route path="/conferencedu2026" element={<ConferenceDetailsPage />} />
        <Route path="/utsav-delhi-2026" element={<UtsavDelhi2026 />} />
        <Route path="*" element={<HomeSPA />} />
      </Routes>
    </Router>
  );
}

export default App;
