import React from "react";

type BranchConnectorProps = {
  variant?: "short" | "long";
  stroke?: string;
  className?: string;
};

const BranchConnector: React.FC<BranchConnectorProps> = ({
  variant = "short",
  stroke = "currentColor",
  className = "",
}) => {
  const isLong = variant === "long";

  const height = isLong ? 49 : 21;
  const curveY = isLong ? 40 : 12;
  const endY = isLong ? 48.5 : 20.5;
  const topOffset = isLong ? "-top-7" : "top-0";

  return (
    <svg
      width="13"
      height={height}
      viewBox={`0 0 13 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${topOffset} -left-4 ${className}`}
    >
      {/* curve */}
      <path
        d={`M0.5 ${curveY}C0.5 ${curveY + 7} 3 ${endY} 7 ${endY}`}
        stroke={stroke}
      />

      {/* vertical line */}
      <line x1="0.5" y1="0" x2="0.5" y2={curveY} stroke={stroke} />

      {/* horizontal line */}
      <line x1="7" y1={endY} x2="13" y2={endY} stroke={stroke} />
    </svg>
  );
};

export default BranchConnector;
