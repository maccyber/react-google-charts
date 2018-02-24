import * as React from "react";
import { ChartRenderer } from "../../../src/Chart";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/linechart
export const LineChart = () => {
  return (
    <ChartRenderer
      type="LineChart"
      onReady={(chartWrapper, dataTable) => {
        chartWrapper.setOptions({
          title: "Company Performance",
          curveType: "function",
          legend: { position: "bottom" }
        });
        chartWrapper.setDataTable([
          ["Year", "Sales", "Expenses"],
          ["2004", 1000, 400],
          ["2005", 1170, 460],
          ["2006", 660, 1120],
          ["2007", 1030, 540]
        ]);
      }}
    />
  );
};
