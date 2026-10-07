import React from "react";

export function MemoTrunkIcon({ className = "w-8 h-8", squircle = true }) {
  return (
    <div className={`flex items-center justify-center shrink-0 ${squircle ? "rounded-xl bg-[#FFD60A] shadow-sm border border-[#E6BF00]/40" : ""} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-0.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="rotate(14 74 24)">
          <rect
            x="63"
            y="8"
            width="23"
            height="30"
            rx="5"
            fill="#090E17"
            stroke="#090E17"
            strokeWidth="1"
          />
          <text
            x="74.5"
            y="29.5"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="16"
            fontWeight="900"
            fill="#FFD60A"
            textAnchor="middle"
          >
            M
          </text>
        </g>
        <path
          d="M 22 75 L 22 55 C 22 41, 32 33, 46 33 C 48 24, 57 20, 64 26 C 72 34, 67 48, 55 49 C 51 49, 49 46, 49 43 M 57 32 C 64 32, 71 36, 74 44 C 77 54, 83 50, 83 38 C 83 33, 79 33, 76 35 M 71 49 C 67 52, 63 54, 61 54 L 61 75 M 53 75 L 53 66 C 53 62, 37 62, 37 66 L 37 75"
          stroke="#090E17"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 19.5 75 L 24.5 75 M 34.5 75 L 39.5 75 M 50.5 75 L 55.5 75 M 58.5 75 L 63.5 75"
          stroke="#090E17"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function MemoTrunkLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <MemoTrunkIcon className="w-8 h-8" squircle={true} />
      <span className="text-[17px] font-bold tracking-tight text-[#141414] whitespace-nowrap">
        MemoTrunk
      </span>
    </div>
  );
}

export default MemoTrunkLogo;
