export default function PerforationMask({
  id,
  width,
  height,
}: {
  id: string;
  width: number;
  height: number;
}) {
  const radius = 8;
  const topMargin = 50;
  const bottomMargin = 50;
  const availableH = height - topMargin - bottomMargin;
  const spacing = 3 * radius;
  const count = Math.max(2, Math.floor(availableH / spacing));
  const gap = count > 1 ? availableH / (count - 1) : 0;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <mask
          id={id}
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <rect width={width} height={height} fill="white" />
          <circle cx="0" cy="0" r="30" fill="black" />
          <circle cx={width} cy="0" r="30" fill="black" />
          <circle cx="0" cy={height} r="30" fill="black" />
          <circle cx={width} cy={height} r="30" fill="black" />
          {Array.from({ length: count }).map((_, i) => {
            const y = topMargin + i * gap;
            return (
              <g key={i}>
                <circle cx="0" cy={y} r={radius} fill="black" />
                <circle cx={width} cy={y} r={radius} fill="black" />
              </g>
            );
          })}
        </mask>
      </defs>
    </svg>
  );
}
