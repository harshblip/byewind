import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// 1. Data Configuration
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface LocationData {
  name: string;
  value: string;
  amount: number; // Used for progress bar width
  coordinates: [number, number]; // [Longitude, Latitude]
}

const LOCATIONS: LocationData[] = [
  {
    name: "New York",
    value: "72K",
    amount: 72,
    coordinates: [-74.006, 40.7128],
  },
  {
    name: "San Francisco",
    value: "39K",
    amount: 39,
    coordinates: [-122.4194, 37.7749],
  },
  {
    name: "Sydney",
    value: "25K",
    amount: 25,
    coordinates: [151.2093, -33.8688],
  },
  {
    name: "Singapore",
    value: "61K",
    amount: 61,
    coordinates: [103.8198, 1.3521],
  },
];

const RevenueByLocation = () => {
  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-[#1C1C1C] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-none">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        Revenue by Location
      </h3>

      {/* Map Section */}
      <div className="w-full h-48 bg-gray-100 dark:bg-[#1C1C1C] rounded-xl overflow-hidden mb-6 relative">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 160,       // Higher = More Zoomed In (Default is ~100)
            center: [0, 15]   // [Longitude, Latitude] - Shifted slightly North
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#D1D5DB", outline: "none" }, // Tailwind gray-300
                    hover: { fill: "#9CA3AF", outline: "none" }, // Tailwind gray-400
                    pressed: { fill: "#6B7280", outline: "none" }, // Tailwind gray-500
                  }}
                  className="dark:fill-gray-600 dark:hover:fill-gray-500 transition-colors duration-200"
                />
              ))
            }
          </Geographies>

          {LOCATIONS.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={3} fill="#000000" className="dark:fill-white" />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* List Section */}
      <div className="flex flex-col gap-6">
        {LOCATIONS.map((item) => (
          <div key={item.name} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {item.name}
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {item.value}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#A8C5DA] dark:bg-gray-400 h-1.5 rounded-full"
                style={{ width: `${item.amount}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;
