import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tableTittle = [
  "User",
  "Age",
  "Leagues Played",
  "Status",
  "Height",
  "Position",
];
const tableData = [
  {
    user: "Lional Messi",
    age: 47,
    leaguesPlayed: ["Laliga", "League 1", "League 2"],
    status: true,
    height: 1.7,
    position: "Forward",
  },
  {
    user: "CR 7",
    age: 87,
    leaguesPlayed: ["Laliga", "League 1", "League 2"],
    status: true,
    height: 1.7,
    position: "Forward",
  },
  {
    user: "Pepe",
    age: 30,
    leaguesPlayed: ["Laliga", "League 1", "League 2"],
    status: false,
    height: 1.7,
    position: "Forward",
  },
  {
    user: "Neymer",
    age: 32,
    leaguesPlayed: ["Laliga", "League 1", "League 2", "League 3"],
    status: false,
    height: 1.7,
    position: "Forward",
  },
  {
    user: "kaka",
    age: 37,
    leaguesPlayed: ["Laliga", "League 1", "League 2", "League 3"],
    status: true,
    height: 1.8,
    position: "Forward",
  },
];
function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  return (
    <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {tableTittle.map((title, index) => (
            <>
              <th key={index} className={`header-column-${title}`}>
                {index === 0 && <Checkbox />}
                {title}
              </th>
            </>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td>
              <Checkbox />
              {data.user}
            </td>
            <td>{data.age}</td>
            <td className="league-column">
              {data.leaguesPlayed.map((item) => (
                <div className="ovel-div">{item}</div>
              ))}
            </td>
            <td>
              <div
                style={{ backgroundColor: data.status ? "#72CD2C" : "#EF6C00" }}
                className="ovel-div"
              >
                {data.status ? "Active" : "Inactive"}
              </div>
            </td>
            <td>{data.height} m</td>
            <td>{data.position}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={tableTittle.length} style={{ textAlign: "center" }}>
            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>
            <FontAwesomeIcon
              onClick={handlePrevious}
              disabled={currentPage === 1}
              icon={faChevronLeft}
            />
            <FontAwesomeIcon
              onClick={handleNext}
              disabled={currentPage === totalPages}
              icon={faChevronRight}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
