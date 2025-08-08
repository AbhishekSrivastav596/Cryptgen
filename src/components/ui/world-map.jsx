"use client";
import { useRef } from "react";
import DottedMap from "dotted-map";

export default function WorldMap() {
  const svgRef = useRef(null);

  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.3,
    color: "#6b728080", 
    shape: "circle",
    backgroundColor: "#111111", 
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const dots = [
    { lat: 37.7749, lng: -122.4194 }, 
    { lat: 51.5074, lng: -0.1278 },  
    { lat: 35.6895, lng: 139.6917 },
    { lat: 40.7128, lng: -74.0060 },  
    { lat: 48.8566, lng: 2.3522 },  
    { lat: 55.7558, lng: 37.6173 },  
    { lat: -33.8688, lng: 151.2093 },
    { lat: 28.6139, lng: 77.2090 }, 
    { lat: -23.5505, lng: -46.6333 }, 
    { lat: 1.3521, lng: 103.8198 },   
    { lat: 52.52, lng: 13.4050 },    
    { lat: 31.2304, lng: 121.4737 },  
    { lat: 19.0760, lng: 72.8777 },  
    { lat: 41.9028, lng: 12.4964 },
    { lat: 6.5244, lng: 3.3792 },   
  ];

  return (
    <section className="relative bg-[#111111] w-full text-white overflow-hidden min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full object-cover"
          alt="world map"
          height="400"
          width="800"
          draggable={false}
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
        >
          {dots.map((dot, i) => {
            const { x, y } = projectPoint(dot.lat, dot.lng);
            return (
              <g key={`dot-${i}`}>
                <circle cx={x} cy={y} r="4" fill="#ffffff" />
                <circle cx={x} cy={y} r="4" fill="#ffffff" opacity="0.5">
                  <animate
                    attributeName="r"
                    from="4"
                    to="16"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 px-2">
        <h2 className="text-3xl md:text-5xl font-light text-neutral-300">
          Available in{" "}
          <span className="block text-neutral-500 font-normal">
            every country
          </span>
        </h2>

        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
          Access our platform from anywhere in the world with our globally
          distributed network and localized support in multiple languages.
        </p>

        <h3 className="text-6xl  text-white mt-16">
          100+
        </h3>
        <p className="text-6xl md:text-7xl font-light text-neutral-200 mt-2">
          Countries
        </p>
      </div>
    </section>
  );
}
