import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";
import "./style.css";

const DataBody = () => {
  const context = useContext(DataAreaContext);

  function formatDate(date) {
    const dataArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return <tbody></tbody>;
};

export default DataBody;
