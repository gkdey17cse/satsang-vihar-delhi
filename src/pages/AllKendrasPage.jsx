// src/pages/AllKendrasPage.jsx
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Navigation, Search, ExternalLink } from "lucide-react";

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

// Complete data from the updated Upayojana Kendra tables (53 centers)
const KENDRA_DATA = [
  // ─────────────────────────────────────────────────────────────────
  // SOUTH DELHI (16)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    area: "Mehrauli",
    owner: "Samarendra Das",
    mobile: "9582185185",
    pincode: "110030",
    lat: 28.52375,
    lng: 77.177944,
    region: "South Delhi",
  },
  {
    id: 2,
    area: "Vasant Kunj",
    owner: "Prashanta Das",
    mobile: "9717480626",
    pincode: "110070",
    lat: 28.518056,
    lng: 77.162722,
    region: "South Delhi",
  },
  {
    id: 3,
    area: "R K Puram",
    owner: "Pravakar Mohanty",
    mobile: "7042539678",
    pincode: "110022",
    lat: 28.572778,
    lng: 77.179111,
    region: "South Delhi",
  },
  {
    id: 4,
    area: "AIIMS",
    owner: "Sarat Kumar Rana",
    mobile: "8285912776",
    pincode: "110029",
    lat: 28.566389,
    lng: 77.20975,
    region: "South Delhi",
  },
  {
    id: 5,
    area: "Khanpur/Devli",
    owner: "Dipti Ranjan Parida",
    mobile: "8826157299",
    pincode: "110062",
    lat: 28.505447,
    lng: 77.234245,
    region: "South Delhi",
  },
  {
    id: 6,
    area: "Dakshinpuri",
    owner: "Shanti Biswas",
    mobile: "7838756340",
    pincode: "110062",
    lat: 28.522722,
    lng: 77.241917,
    region: "South Delhi",
  },
  {
    id: 7,
    area: "C R Park",
    owner: "Sudipto Shekhar De",
    mobile: "9560566695",
    pincode: "110019",
    lat: 28.535778,
    lng: 77.257222,
    region: "South Delhi",
  },
  {
    id: 8,
    area: "Kotla Mubarakpur",
    owner: "Duryodhan Bhuyan",
    mobile: "8130770354",
    pincode: "110003",
    lat: 28.574417,
    lng: 77.224722,
    region: "South Delhi",
  },
  {
    id: 9,
    area: "Palam Colony",
    owner: "Manaranjan Sutar",
    mobile: "9315561656",
    pincode: "110077",
    lat: 28.57225,
    lng: 77.080806,
    region: "South Delhi",
  },
  {
    id: 10,
    area: "Dwarka Sec 1A",
    owner: "Gautam Chakraborty",
    mobile: "9849937257",
    pincode: "110045",
    lat: 28.601167,
    lng: 77.091194,
    region: "South Delhi",
  },
  {
    id: 11,
    area: "Naraina",
    owner: "Sambit Sahoo",
    mobile: "9654785780",
    pincode: "110028",
    lat: 28.621472,
    lng: 77.135167,
    region: "South Delhi",
  },
  {
    id: 12,
    area: "Rajnagar-2, Palam",
    owner: "Akhil Ballabh",
    mobile: "9868975887",
    pincode: "110077",
    lat: 28.57696,
    lng: 77.078394,
    region: "South Delhi",
  },
  {
    id: 13,
    area: "Mahavir Enclave",
    owner: "Ashok Sanyal",
    mobile: "8588806682",
    pincode: "110045",
    lat: 28.598639,
    lng: 77.078083,
    region: "South Delhi",
  },
  {
    id: 14,
    area: "Dwarka Mor",
    owner: "Chinta Sarkar",
    mobile: "8800702482",
    pincode: "110059",
    lat: 28.623861,
    lng: 77.0295,
    region: "South Delhi",
  },
  {
    id: 15,
    area: "Madanpur Khadar",
    owner: "Bhabatosh Pradhan",
    mobile: "9315189766",
    pincode: "110076",
    lat: 28.534806,
    lng: 77.301,
    region: "South Delhi",
  },
  {
    id: 16,
    area: "Badarpur",
    owner: "Ashok Kumar Rout",
    mobile: "9654770432",
    pincode: "110044",
    lat: 28.495583,
    lng: 77.305167,
    region: "South Delhi",
  },
  // ─────────────────────────────────────────────────────────────────
  // WEST DELHI (8)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 17,
    area: "Uttam Nagar West",
    owner: "Pradip Ram",
    mobile: "9711610309",
    pincode: "110059",
    lat: 28.626556,
    lng: 77.054917,
    region: "West Delhi",
  },
  {
    id: 18,
    area: "Basaidarapur",
    owner: "Shubhrangsu Sinha",
    mobile: "9911060183",
    pincode: "110015",
    lat: 28.656861,
    lng: 77.134389,
    region: "West Delhi",
  },
  {
    id: 19,
    area: "Patel Nagar",
    owner: "Prabitra Manna",
    mobile: "9811693019",
    pincode: "110008",
    lat: 28.653778,
    lng: 77.160111,
    region: "West Delhi",
  },
  {
    id: 20,
    area: "Kirari Suleman Nagar",
    owner: "Rajendra Kumar Puhan",
    mobile: "9968383650",
    pincode: "110086",
    lat: 28.703139,
    lng: 77.051667,
    region: "West Delhi",
  },
  {
    id: 21,
    area: "Uttam Nagar East",
    owner: "Debdutta Senapati",
    mobile: "9268680328",
    pincode: "110059",
    lat: 28.645694,
    lng: 77.038472,
    region: "West Delhi",
  },
  {
    id: 22,
    area: "Narela",
    owner: "Dr. Manas Dhal",
    mobile: "9810795296",
    pincode: "110040",
    lat: 28.843122,
    lng: 77.100738,
    region: "West Delhi",
  },
  {
    id: 23,
    area: "Najafgarh (Shyam Vihar)",
    owner: "Upendra Kr. Nirala",
    mobile: "9818621159",
    pincode: "110043",
    lat: 28.59816,
    lng: 77.003477,
    region: "West Delhi",
  },
  {
    id: 24,
    area: "Najafgarh (Gupta Market)",
    owner: "Upananda Sarkar",
    mobile: "9810873119",
    pincode: "110043",
    lat: 28.617222,
    lng: 76.977333,
    region: "West Delhi",
  },
  // ─────────────────────────────────────────────────────────────────
  // NORTH DELHI (6)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 25,
    area: "Azadpur",
    owner: "Balram Sahni",
    mobile: "8285354034",
    pincode: "110033",
    lat: 28.702639,
    lng: 77.179611,
    region: "North Delhi",
  },
  {
    id: 26,
    area: "Burari",
    owner: "Pranab Saha",
    mobile: "9313309846",
    pincode: "110084",
    lat: 28.729694,
    lng: 77.209111,
    region: "North Delhi",
  },
  {
    id: 27,
    area: "Ashok Vihar",
    owner: "Rina Roy",
    mobile: "9650256436",
    pincode: "110052",
    lat: 28.691417,
    lng: 77.173,
    region: "North Delhi",
  },
  {
    id: 28,
    area: "Karawal Nagar",
    owner: "Uttam Maity (SAK)",
    mobile: "9350902322",
    pincode: "110094",
    lat: 28.718308,
    lng: 77.263925,
    region: "North Delhi",
  },
  {
    id: 29,
    area: "Rohini Sec 24",
    owner: "Santanu Sengupta",
    mobile: "7042512777",
    pincode: "110085",
    lat: 28.727278,
    lng: 77.092806,
    region: "North Delhi",
  },
  {
    id: 30,
    area: "Jagjit Nagar",
    owner: "Dhiren Das",
    mobile: "7982838245",
    pincode: "110053",
    lat: 28.686528,
    lng: 77.256917,
    region: "North Delhi",
  },
  // ─────────────────────────────────────────────────────────────────
  // EAST DELHI (6)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 31,
    area: "New Ashok Nagar",
    owner: "Anant Behera",
    mobile: "8527238778",
    pincode: "110096",
    lat: 28.594056,
    lng: 77.307861,
    region: "East Delhi",
  },
  {
    id: 32,
    area: "Mayur Vihar Ph 3",
    owner: "Sikha Das Gupta",
    mobile: "9711329947",
    pincode: "110096",
    lat: 28.615556,
    lng: 77.335667,
    region: "East Delhi",
  },
  {
    id: 33,
    area: "Jhilmil Colony",
    owner: "Upendra Kumar",
    mobile: "9871311268",
    pincode: "110095",
    lat: 28.669917,
    lng: 77.308611,
    region: "East Delhi",
  },
  {
    id: 34,
    area: "Timarpur",
    owner: "Dr. Jubilee Purkayastha",
    mobile: "8527558410",
    pincode: "110054",
    lat: 28.707454,
    lng: 77.219073,
    region: "East Delhi",
  },
  {
    id: 35,
    area: "Geeta Colony",
    owner: "Adwaitya Ghosh",
    mobile: "7982684519",
    pincode: "110031",
    lat: 28.657583,
    lng: 77.265278,
    region: "East Delhi",
  },
  {
    id: 36,
    area: "Shakarpur",
    owner: "Vikash Chandra",
    mobile: "9818120861",
    pincode: "110092",
    lat: 28.628611,
    lng: 77.283194,
    region: "East Delhi",
  },
  // ─────────────────────────────────────────────────────────────────
  // CENTRAL DELHI (1)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 37,
    area: "Karol Bagh",
    owner: "Bhaktipada Mondal (SAK)",
    mobile: "9953920866",
    pincode: "110005",
    lat: 28.650333,
    lng: 77.185972,
    region: "Central Delhi",
  },
  // ─────────────────────────────────────────────────────────────────
  // NOIDA (5)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 38,
    area: "Sector 11, Noida",
    owner: "Ananta Behera (SAK)",
    mobile: "8527238778",
    pincode: "201301",
    lat: 28.598796,
    lng: 77.335277,
    region: "Noida",
  },
  {
    id: 39,
    area: "Sector 71, Noida",
    owner: "Sanjay Nayak",
    mobile: "9971799548",
    pincode: "201307",
    lat: 28.595944,
    lng: 77.378278,
    region: "Noida",
  },
  {
    id: 40,
    area: "Sector 93, Noida",
    owner: "Dilip Rui Das",
    mobile: "9560537299",
    pincode: "201304",
    lat: 28.52525,
    lng: 77.382222,
    region: "Noida",
  },
  {
    id: 41,
    area: "Greater Noida CHI-5",
    owner: "Suryamani Sahu",
    mobile: "9717887274",
    pincode: "201310",
    lat: 28.43162,
    lng: 77.503632,
    region: "Noida",
  },
  {
    id: 42,
    area: "Yusufpur Chak Saberi",
    owner: "Vijay Pandey",
    mobile: "8601111719",
    pincode: "201009",
    lat: 28.616667,
    lng: 77.407861,
    region: "Noida",
  },
  // ─────────────────────────────────────────────────────────────────
  // GURGAON (7)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 43,
    area: "Palam Vihar",
    owner: "Brundaban Sahoo (SAK)",
    mobile: "9891901098",
    pincode: "122015",
    lat: 28.495984,
    lng: 77.056811,
    region: "Gurgaon",
  },
  {
    id: 44,
    area: "Shivji Park, Gurgaon",
    owner: "Sarat Biswal",
    mobile: "9810675770",
    pincode: "122001",
    lat: 28.448444,
    lng: 77.014167,
    region: "Gurgaon",
  },
  {
    id: 45,
    area: "Chakkarpur",
    owner: "Paltu Mandal",
    mobile: "8800386018",
    pincode: "122002",
    lat: 28.473644,
    lng: 77.087635,
    region: "Gurgaon",
  },
  {
    id: 46,
    area: "Surat Nagar Phase 1",
    owner: "Pradipta Swain",
    mobile: "9911522386",
    pincode: "122006",
    lat: 28.489115,
    lng: 77.000997,
    region: "Gurgaon",
  },
  {
    id: 47,
    area: "Solapur",
    owner: "Ratan Paul",
    mobile: "9560125535",
    pincode: "110061",
    lat: 28.512556,
    lng: 77.067056,
    region: "Gurgaon",
  },
  {
    id: 48,
    area: "Samalka",
    owner: "Pradipta Nayak",
    mobile: "7065851555",
    pincode: "110097",
    lat: 28.533778,
    lng: 77.088028,
    region: "Gurgaon",
  },
  {
    id: 49,
    area: "Kapashera",
    owner: "Harish Jena",
    mobile: "9910258417",
    pincode: "110037",
    lat: 28.527222,
    lng: 77.084111,
    region: "Gurgaon",
  },
  // ─────────────────────────────────────────────────────────────────
  // GHAZIABAD (3)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 50,
    area: "Sanjay Nagar",
    owner: "Mohan Prasad Yadav (SAK)",
    mobile: "9289122535",
    pincode: "201002",
    lat: 28.709278,
    lng: 77.416111,
    region: "Ghaziabad",
  },
  {
    id: 51,
    area: "Raj Nagar Extension",
    owner: "C K Patra",
    mobile: "9911961402",
    pincode: "201017",
    lat: 28.709306,
    lng: 77.416056,
    region: "Ghaziabad",
  },
  {
    id: 52,
    area: "Vaishali",
    owner: "Swapan Bhowal",
    mobile: "9717503276",
    pincode: "201010",
    lat: 28.645167,
    lng: 77.345361,
    region: "Ghaziabad",
  },
  // ─────────────────────────────────────────────────────────────────
  // FARIDABAD (1)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 53,
    area: "Sector 8, Faridabad",
    owner: "Prabir Dutta (SAK)",
    mobile: "8860476864",
    pincode: "121006",
    lat: 28.355525,
    lng: 77.331255,
    region: "Faridabad",
  },
];

// Order in which regions should appear
const REGION_ORDER = [
  "South Delhi",
  "West Delhi",
  "North Delhi",
  "East Delhi",
  "Central Delhi",
  "Noida",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
];

const AllKendrasPage = () => {
  const [nearest, setNearest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const findNearest = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const sorted = [...KENDRA_DATA]
          .map((k) => ({
            ...k,
            dist: getDistance(latitude, longitude, k.lat, k.lng),
          }))
          .sort((a, b) => a.dist - b.dist);
        setNearest(sorted.slice(0, 3));
        setLoading(false);
      },
      () => {
        alert("Please enable location access to find centers near you.");
        setLoading(false);
      },
    );
  };

  const filteredKendras = KENDRA_DATA.filter(
    (k) =>
      k.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.pincode.includes(searchTerm),
  );

  // Group filtered kendras by region
  const groupedByRegion = filteredKendras.reduce((acc, k) => {
    if (!acc[k.region]) acc[k.region] = [];
    acc[k.region].push(k);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>Upyojna Kendras | Satsang Vihar Delhi Centers</title>
        <meta
          name="description"
          content="Find all Upayojana Kendras and Satsang centers across New Delhi. Get contact details, addresses, and directions for your nearest Satsang Vihar Delhi branch."
        />
        <meta
          name="keywords"
          content="Satsang Vihar Delhi centers, Upyojna Kendra Delhi, Satsang branches New Delhi, Anukulchandra ashram near me"
        />
        <link
          rel="canonical"
          href="https://www.satsangvihardelhi.org/upyojna"
        />
      </Helmet>

      <div className="min-h-screen bg-[var(--bg-main)]">
        <Navbar />
        {/* Searching Section */}
        <header className="text-center py-32 bg-[var(--bg-tertiary)] border-b border-[var(--border-subtle)]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-main)] mb-4">
            Upayojana Kendras of Satsang Vihar Delhi
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
            Explore our 53 service centers across the Delhi-NCR region,
            established for the fulfillment of the mission.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full max-w-md">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by Area, Region or Pincode or turn on Location..."
                className="w-full pl-12 pr-4 py-3 text-sm rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={findNearest}
              className="bg-[var(--primary)] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[var(--primary-hover)] transition-all shadow-lg active:scale-95"
            >
              <Navigation size={18} />{" "}
              {loading ? "Locating..." : "Find Nearest to Me"}
            </button>
          </div>
        </header>

        <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4">
          {/* Nearest Centers Section */}
          {nearest.length > 0 && (
            <div className="mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 flex items-center gap-3">
                <div className="h-8 w-1 bg-[var(--primary)] rounded-full"></div>
                Closest Upayojna of Satsang Vihar Delhi to Your Location
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {nearest.map((k) => (
                  <KendraCard key={`near-${k.id}`} k={k} showDist={true} />
                ))}
              </div>
              <hr className="mt-16 border-[var(--border-subtle)]" />
            </div>
          )}

          {/* All Centers Grouped by Region */}
          {REGION_ORDER.map(
            (region) =>
              groupedByRegion[region] &&
              groupedByRegion[region].length > 0 && (
                <div key={region} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 flex items-center gap-3">
                    <div className="h-8 w-1 bg-[var(--primary)] rounded-full"></div>
                    {region} ({groupedByRegion[region].length})
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedByRegion[region].map((k) => (
                      <KendraCard key={k.id} k={k} />
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

const KendraCard = ({ k, showDist }) => (
  <div className="group relative bg-white dark:bg-[var(--bg-secondary)] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--primary)]">
    {/* Decorative top bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-transparent"></div>

    <div className="p-6">
      {/* Header with region and optional distance */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-[var(--primary)]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
            {k.region}
          </span>
        </div>
        {showDist && (
          <div className="text-right">
            <span className="text-lg font-bold text-[var(--primary)]">
              {k.dist.toFixed(1)} km
            </span>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
              Away
            </p>
          </div>
        )}
      </div>

      {/* Area name */}
      <h3 className="text-2xl font-extrabold text-[var(--text-main)] mb-6 leading-tight">
        {k.area}
      </h3>

      {/* Details grid */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-[var(--bg-main)] rounded-full flex items-center justify-center text-[var(--primary)] border border-[var(--border-subtle)]">
            <Search size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[var(--text-muted)] uppercase font-bold tracking-wider">
              Center Owner
            </p>
            <p className="text-[var(--text-main)] truncate">{k.owner}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-[var(--bg-main)] rounded-full flex items-center justify-center text-[var(--primary)] border border-[var(--border-subtle)]">
            <Phone size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[var(--text-muted)] uppercase font-bold tracking-wider">
              Contact Number
            </p>
            <p className="text-[var(--text-main)] truncate">{k.mobile}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-[var(--bg-main)] rounded-full flex items-center justify-center text-[var(--primary)] border border-[var(--border-subtle)]">
            <MapPin size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[var(--text-muted)] uppercase font-bold tracking-wider">
              Pincode
            </p>
            <p className="text-[var(--text-main)] truncate">{k.pincode}</p>
          </div>
        </div>
      </div>

      {/* Action button */}
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${k.lat},${k.lng}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[var(--bg-main)] text-[var(--text-main)] rounded-xl font-semibold border border-[var(--border-subtle)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300 group"
      >
        <ExternalLink
          size={18}
          className="group-hover:scale-110 transition-transform"
        />
        <span>Get Directions</span>
      </a>
    </div>
  </div>
);

export default AllKendrasPage;
