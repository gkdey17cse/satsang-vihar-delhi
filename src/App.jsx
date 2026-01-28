// src/App.jsx
// 1. Change BrowserRouter to HashRouter
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import HomeSPA from "./pages/HomeSPA";
import HistoryPage from "./pages/HistoryPage";
import ConferenceDetailsPage from "./pages/ConferenceDetailsPage";

function App() {
  return (
    // 2. REMOVE the basename prop. HashRouter handles sub-folders automatically.
    <Router>
      <Routes>
        {/* The Main Single Page Application Route */}
        <Route path="/" element={<HomeSPA />} />

        {/* Separate detailed pages */}
        <Route path="/history" element={<HistoryPage />} />

        {/* Conference Page */}
        <Route path="/conference-du-2026" element={<ConferenceDetailsPage />} />

        {/* Fallback route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;