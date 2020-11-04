import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Clever Programmer</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Sidebar;
