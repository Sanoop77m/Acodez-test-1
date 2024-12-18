import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import {
  faStar,
  faFilter,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import LogoIcon from "../Assets/logo.svg";
import Table from "./Table";
const sideMenuItems = [
  {
    tittle: "List Item",
    subMenuItem: [
      {
        tittle: "list Item",
      },
      {
        tittle: "list Item",
      },
      {
        tittle: "list Item",
      },
      {
        tittle: "list Item",
      },
    ],
  },
];
const tableData = {};
function Dashboard() {
  const [sideMenuActive, setSideMenuActive] = useState(false);
  return (
    <div className="dashboard-cont">
      {/* dashboard left nav section */}
      <div className="dashboard-left-section">
        <img src={LogoIcon} alt="My Icon" className="logo-icon" />
        <div className="side-menu">
          {sideMenuItems.map((item) => (
            <>
              <div
                className="side-menu-item"
                onClick={() => setSideMenuActive(!sideMenuActive)}
              >
                <FontAwesomeIcon icon={faStar} className="color-grey" />
                <h3>{item.tittle}</h3>
                <FontAwesomeIcon
                  icon={sideMenuActive ? faChevronUp : faChevronDown}
                  className="color-grey"
                />
              </div>
              <div
                className={`sub-menu-list-container ${
                  sideMenuActive ? "sub-menu-list-active" : ""
                }`}
              >
                {item.subMenuItem.map((item) => (
                  <div className="sub-menu-item">
                    <FontAwesomeIcon icon={faStar} className="color-grey" />
                    <h3>{item.tittle}</h3>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      {/* dashboard right section */}
      <div className="dashboard-right-section">
        <h1>User management</h1>
        <div className="table-container">
          <div className="table-head-cont">
            <div className="search-sec">
              <TextField
                id="search-table"
                label="search"
                placeholder="Search by name, email, etc.."
                className="search-field"
              />
              <FontAwesomeIcon
                icon={faFilter}
                className="color-grey filter-icon"
              />
            </div>
            <button className="create-new-btn">New</button>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
