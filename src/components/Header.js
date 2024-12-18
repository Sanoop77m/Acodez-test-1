import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left-cont">
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "white", fontSize: "24px" }}
        />
        <h3>Typography</h3>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faStar} />
        <div className="user-icon">OP</div>
      </div>
    </div>
  );
}

export default Header;
