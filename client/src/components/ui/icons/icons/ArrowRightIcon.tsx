import React from "react";
import type { IconProps } from "../types";
import Icons from "../Icons";

const ArrowRightIcon: React.FC<IconProps> = (props) => {
  return (
    <Icons {...props}>
      <path
        d="M9 18L14.2929 12.7071C14.6262 12.3738 14.7929 12.2071 14.7929 12C14.7929 11.7929 14.6262 11.6262 14.2929 11.2929L9 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icons>
  );
};

export default ArrowRightIcon;
