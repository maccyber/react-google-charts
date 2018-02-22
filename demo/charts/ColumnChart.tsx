import * as React from "react";
import { dataBank } from "../dataBank";
import { Chart, ChartRenderer } from "../../src/Chart";
import {
  GoogleDataTableColumnType,
  GoogleDataTableColumnRoleType
} from "../../src";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/candlestickchart
export const ColumnChart = () => {
  return (
    <ChartRenderer
      type="ColumnChart"
      onReady={(chartWrapper, dataTable, arrayToDataTable) => {
        var data = arrayToDataTable([
          ["Element", "Density", { role: "style" }],
          ["Copper", 8.94, "#b87333"], // RGB value
          ["Silver", 10.49, "silver"], // English color name
          ["Gold", 19.3, "gold"],

          ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
        ]);
        chartWrapper.setDataTable(data);
      }}
    />
  );
};
