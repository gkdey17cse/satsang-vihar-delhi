import Marquee from "react-fast-marquee"; 
import { Link } from "react-router-dom";

const NotificationMarquee = () => {
  return (
    <div className="bg-[var(--primary)] text-white py-2">
      <Marquee gradient={false} speed={20} pauseOnHover={true}>
        <Link to="/conference-details" className="hover:underline flex items-center">
          <span className="mx-12 font-medium">
            Upcoming Event: Career Excellence Conference @ University of Delhi — 20 February 2026
            <span className="ml-3 text-white/90 underline decoration-amber-200/60">
               Click for Full Agenda & Registration
            </span>
          </span>
        </Link>
        
        {/* Repeating for a seamless loop */}
        <Link to="/conference-details" className="hover:underline flex items-center">
          <span className="mx-12 font-medium">
            Career Excellence Conference at University of Delhi — 20 February 2026
            <span className="ml-3 text-white/90 underline decoration-amber-200/60">
               Register Now
            </span>
          </span>
        </Link>
      </Marquee>
    </div>
  );
};

export default NotificationMarquee;