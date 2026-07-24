import React from "react";
import type { IconProps } from "../types";
import Icons from "../Icons";

const TeamIcon: React.FC<IconProps> = (props) => {
  return (
    <Icons {...props}>
      <circle cx="12" cy="5" r="3" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
      <circle cx="4" cy="20" r="2" />
      <path
        d="M20 15C20 13.8954 18.8807 13 17.5 13H6.5C5.11929 13 4 13.8954 4 15"
        strokeLinecap="round"
      />
      <path d="M12 11L12 15" strokeLinecap="round" />
    </Icons>
  );
};

export default TeamIcon;
