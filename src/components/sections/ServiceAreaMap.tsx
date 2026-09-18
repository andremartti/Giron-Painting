import { useLanguage } from '../../i18n/LanguageContext';

/**
 * Illustrated (not to scale) map of Plano and nearby cities.
 * Points are projected from each city's approximate latitude/longitude so the
 * relative positions are recognizable to locals.
 */

const BOUNDS = { west: -96.95, east: -96.58, north: 33.36, south: 32.92 };
const VIEW = { width: 420, height: 510, pad: 22 };

function project(lat: number, lng: number): [number, number] {
  const x = VIEW.pad + ((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * (VIEW.width - VIEW.pad * 2 - 20);
  const y = VIEW.pad + ((BOUNDS.north - lat) / (BOUNDS.north - BOUNDS.south)) * (VIEW.height - VIEW.pad * 2 - 20);
  return [Math.round(x), Math.round(y)];
}

const cities = [
  { name: 'Plano', lat: 33.0198, lng: -96.6989, hub: true },
  { name: 'Frisco', lat: 33.1507, lng: -96.8236 },
  { name: 'McKinney', lat: 33.1972, lng: -96.6398 },
  { name: 'Celina', lat: 33.3246, lng: -96.7845 },
  { name: 'Allen', lat: 33.1032, lng: -96.6706 },
  { name: 'Richardson', lat: 32.9483, lng: -96.7299 },
  { name: 'Carrollton', lat: 32.9756, lng: -96.89 },
  { name: 'The Colony', lat: 33.089, lng: -96.8864 },
].map((city) => ({ ...city, point: project(city.lat, city.lng) }));

/** Simplified highway alignments (lat, lng). */
const roads: [number, number][][] = [
  // US-75
  [
    [32.9, -96.74],
    [32.9483, -96.7299],
    [33.0198, -96.7],
    [33.1032, -96.668],
    [33.1972, -96.636],
    [33.3, -96.61],
    [33.36, -96.6],
  ],
  // Dallas North Tollway
  [
    [32.9, -96.822],
    [33.0, -96.826],
    [33.1, -96.824],
    [33.2, -96.826],
    [33.3, -96.83],
    [33.36, -96.83],
  ],
  // President George Bush Turnpike
  [
    [32.99, -96.97],
    [32.99, -96.86],
    [32.995, -96.75],
    [32.97, -96.66],
    [32.93, -96.58],
  ],
  // SH-121
  [
    [33.04, -96.97],
    [33.07, -96.88],
    [33.1, -96.8],
    [33.14, -96.72],
    [33.18, -96.66],
    [33.21, -96.58],
  ],
];

export function ServiceAreaMap() {
  const { t } = useLanguage();
  const hub = cities[0].point;

  return (
    <figure className="relative overflow-hidden rounded-xl bg-night p-3 shadow-lift sm:p-4">
      <svg
        viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
        role="img"
        aria-labelledby="service-map-title"
        className="block h-auto w-full"
      >
        <title id="service-map-title">{t.serviceAreas.mapLabel}</title>
        <defs>
          <pattern id="map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="rgb(255 255 255 / 0.05)" strokeWidth="1" />
          </pattern>
          <radialGradient id="map-glow">
            <stop offset="0%" stopColor="rgb(194 74 49 / 0.45)" />
            <stop offset="100%" stopColor="rgb(194 74 49 / 0)" />
          </radialGradient>
        </defs>

        <rect width={VIEW.width} height={VIEW.height} rx="10" fill="#1a1917" />
        <rect width={VIEW.width} height={VIEW.height} fill="url(#map-grid)" />

        {/* Lake Lewisville (simplified; drawn relative to latitude 33.23) */}
        <path
          transform={`translate(0 ${project(33.23, BOUNDS.west)[1] - VIEW.pad})`}
          d="M0 118c14-8 30-4 40 8s6 30 16 40-2 26-18 30-26 14-38 12z"
          fill="rgb(120 160 190 / 0.12)"
          stroke="rgb(120 160 190 / 0.18)"
        />

        {roads.map((road, index) => (
          <polyline
            key={index}
            points={road.map(([lat, lng]) => project(lat, lng).join(',')).join(' ')}
            fill="none"
            stroke="rgb(255 255 255 / 0.13)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Coverage rings around Plano */}
        <circle cx={hub[0]} cy={hub[1]} r="150" fill="url(#map-glow)" />
        {[80, 160, 240, 320].map((radius) => (
          <circle
            key={radius}
            cx={hub[0]}
            cy={hub[1]}
            r={radius}
            fill="none"
            stroke="rgb(232 145 122 / 0.22)"
            strokeDasharray="3 6"
          />
        ))}

        {cities.map(({ name, point: [x, y], hub: isHub }) =>
          isHub ? (
            <g key={name}>
              <circle cx={x} cy={y} r="16" fill="rgb(194 74 49 / 0.35)" className="map-pulse" />
              <circle cx={x} cy={y} r="9" fill="#c24a31" stroke="#fff" strokeWidth="3" />
              <text
                x={x + 18}
                y={y + 6}
                fill="#fff"
                fontSize="17"
                fontWeight="700"
                fontFamily="var(--font-display)"
                paintOrder="stroke"
                stroke="#1a1917"
                strokeWidth="4"
              >
                {name}
              </text>
            </g>
          ) : (
            <g key={name}>
              <circle cx={x} cy={y} r="5" fill="#f8f5ef" stroke="#1a1917" strokeWidth="2" />
              <text
                x={x + 11}
                y={y + 4.5}
                fill="rgb(255 255 255 / 0.82)"
                fontSize="13"
                fontWeight="500"
                fontFamily="var(--font-sans)"
                paintOrder="stroke"
                stroke="#1a1917"
                strokeWidth="4"
              >
                {name}
              </text>
            </g>
          ),
        )}

        {/* Compass */}
        <g transform="translate(34 34)" fill="rgb(255 255 255 / 0.6)">
          <path d="M0-14 5 4 0 0-5 4z" />
          <text y="18" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="var(--font-display)">
            N
          </text>
        </g>

        {/* Direction to Dallas */}
        <g
          transform={`translate(${project(32.92, -96.797)[0]} ${VIEW.height - 16})`}
          fill="rgb(255 255 255 / 0.55)"
          fontSize="11"
          fontFamily="var(--font-sans)"
        >
          <path d="M-3-8h6v6h4L0 5-7-2h4z" />
          <text x="12" y="1" dominantBaseline="middle">
            {t.serviceAreas.toDallas}
          </text>
        </g>
      </svg>
      <figcaption className="px-1 pt-3 text-xs text-white/50 sm:px-2">{t.serviceAreas.mapNote}</figcaption>
    </figure>
  );
}
