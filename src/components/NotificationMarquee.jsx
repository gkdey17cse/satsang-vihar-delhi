import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NotificationMarquee = () => {
  return (
    <div className="bg-[var(--primary)] text-white py-2 text-sm lg:text-base">
      <Marquee gradient={false} speed={20} pauseOnHover={true}>
        <Link
          to="/conference-du-2026"
          className="hover:underline flex items-center"
        >
          <span className="mx-12 font-medium">
            Upcoming Event: Career Excellence Conference @ University of Delhi —
            20 February 2026
            <span className="ml-3 text-white/90 underline decoration-amber-200/60">
              Click for Full Agenda & Registration
            </span>
          </span>
        </Link>
      </Marquee>
    </div>
  );
};

export default NotificationMarquee;
