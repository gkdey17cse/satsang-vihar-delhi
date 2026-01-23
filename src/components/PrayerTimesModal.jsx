// src/components/PrayerTimesModal.jsx
import { useEffect } from "react";
import { X, Sun, Moon } from "lucide-react"; // Ensure you have lucide-react or use SVGs

const PRAYER_DATA = {
  January: { morning: "07:13", evening: "17:47" },
  February: { morning: "06:58", evening: "18:10" },
  March: { morning: "06:28", evening: "18:30" },
  April: { morning: "05:54", evening: "18:47" },
  May: { morning: "05:30", evening: "19:05" },
  June: { morning: "05:24", evening: "19:19" },
  July: { morning: "05:34", evening: "19:19" },
  August: { morning: "05:51", evening: "18:58" },
  September: { morning: "06:06", evening: "18:25" },
  October: { morning: "06:23", evening: "17:51" },
  November: { morning: "06:44", evening: "17:28" },
  December: { morning: "07:06", evening: "17:27" },
};

const PrayerTimesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 1. Get Current Month automatically
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentData = PRAYER_DATA[currentMonth];

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-[var(--bg-secondary)] rounded-2xl shadow-2xl border border-[var(--border-subtle)] overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)]">
          <div>
            <h2 className="text-xl font-bold text-[var(--text-main)]">
              Daily Prayer Times
            </h2>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
              New Delhi, India
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] transition-colors"
          >
            {/* X Icon (SVG) */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 18 18" />
            </svg>
          </button>
        </div>

        {/* CURRENT MONTH HIGHLIGHT */}
        <div className="bg-[var(--bg-tertiary)] p-6 text-center border-b border-[var(--border-subtle)]">
          <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
            Current Month: {currentMonth}
          </span>

          <div className="flex justify-center items-center gap-8 sm:gap-12">
            {/* Morning */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-[var(--text-main)]">
                {currentData.morning}
              </span>
              <span className="text-xs font-medium text-[var(--text-muted)] mt-1">
                Morning
              </span>
            </div>

            {/* Divider */}
            <div className="h-12 w-[1px] bg-[var(--border-subtle)]"></div>

            {/* Evening */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 mb-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-[var(--text-main)]">
                {currentData.evening}
              </span>
              <span className="text-xs font-medium text-[var(--text-muted)] mt-1">
                Evening
              </span>
            </div>
          </div>
        </div>

        {/* FULL YEAR TABLE */}
        <div className="max-h-[300px] overflow-y-auto p-0">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[var(--text-muted)] uppercase bg-[var(--bg-main)] sticky top-0">
              <tr>
                <th className="px-6 py-3 font-medium">Month</th>
                <th className="px-6 py-3 font-medium text-center">Morning</th>
                <th className="px-6 py-3 font-medium text-center">Evening</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {Object.entries(PRAYER_DATA).map(([month, times]) => {
                const isCurrent = month === currentMonth;
                return (
                  <tr
                    key={month}
                    className={`
                      ${isCurrent ? "bg-[var(--primary)]/10" : "hover:bg-[var(--bg-tertiary)]"} 
                      transition-colors
                    `}
                  >
                    <td
                      className={`px-6 py-4 font-medium ${isCurrent ? "text-[var(--primary)]" : "text-[var(--text-main)]"}`}
                    >
                      {month} {isCurrent && " (Now)"}
                    </td>
                    <td className="px-6 py-4 text-center text-[var(--text-muted)]">
                      {times.morning}
                    </td>
                    <td className="px-6 py-4 text-center text-[var(--text-muted)]">
                      {times.evening}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="bg-[var(--bg-main)] p-4 text-center border-t border-[var(--border-subtle)]">
          <p className="text-[10px] text-[var(--text-muted)]">
            * Times are specific to New Delhi longitude/latitude.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimesModal;
