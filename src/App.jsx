// src/App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import HomeSPA from "./pages/HomeSPA";
import HistoryPage from "./pages/HistoryPage";
import ConferenceDetailsPage from "./pages/conference/conference-du-2026";
import UtsavDelhi2026 from "./pages/utsav/utsav-delhi-2026"; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSPA />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/conference-du-2026" element={<ConferenceDetailsPage />} />
        
        {/* Add the new Utsav Route */}
        <Route path="/utsav-delhi-2026" element={<UtsavDelhi2026 />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;