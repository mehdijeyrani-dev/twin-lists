import React from "react";
import Icons from "../Icons";
import type { IconProps } from "../types";

const SearchIcon: React.FC<IconProps> = (props) => {
  return (
    <Icons {...props}>
      <path d="M17.5 17.5L22 22" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
        strokeLinejoin="round"
      />
    </Icons>
  );
};

export default SearchIcon;
