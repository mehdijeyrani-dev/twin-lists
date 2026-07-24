import React from "react";
import type { IconProps } from "./types";

type BaseIconProps = IconProps & {
  children: React.ReactNode;
};

const Icons: React.FC<BaseIconProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  className = "",
  children,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default Icons;
