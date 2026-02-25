import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NotificationMarquee = () => {
  return (
    <div className="bg-[var(--primary)] text-white py-2 text-sm lg:text-base">
      <Marquee gradient={false} speed={20} pauseOnHover={true}>
        <Link
          to="/utsav-delhi-2026"
          className="hover:underline flex items-center"
        >
          <span className="mx-12 font-medium">
            Upcoming Event: 37th Delhi-NCR Utsav @ Ramleela Maidan, Ashok Vihar — 28th & 29th March 2026
            <span className="ml-3 text-white/90 underline decoration-amber-200/60">
              Click for Full Schedule & Details
            </span>
          </span>
        </Link>
      </Marquee>
    </div>
  );
};

export default NotificationMarquee;