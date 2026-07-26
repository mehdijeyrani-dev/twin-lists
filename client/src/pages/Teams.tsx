import React from "react";
import { Outlet } from "react-router-dom";

const Teams = () => {
  return (
    <div>
      <h1>Teams</h1>
      <Outlet />
    </div>
  );
};

export default Teams;
