// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSPA from "./pages/HomeSPA";
import HistoryPage from "./pages/HistoryPage";
import ConferenceDetailsPage from "./pages/ConferenceDetailsPage"; // <--- Import logic

function App() {
  return (
    <Router>
      <Routes>
        {/* The Main Single Page Application Route */}
        <Route path="/" element={<HomeSPA />} />

        {/* Separate detailed pages */}
        <Route path="/history" element={<HistoryPage />} />
        
        {/* NEW ROUTE ADDED HERE */}
        <Route path="/conference-details" element={<ConferenceDetailsPage />} />

        {/* Fallback route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;