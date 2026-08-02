import React from "react";
import Icons from "../Icons";
import type { IconProps } from "../types";

const AddIcon: React.FC<IconProps> = (props) => {
  return (
    <Icons {...props}>
      <path d="M12 4V20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12H20" strokeLinecap="round" strokeLinejoin="round" />
    </Icons>
  );
};

export default AddIcon;
