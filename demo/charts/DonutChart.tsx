import * as React from "react";
import { ChartRenderer } from "../../src/Chart";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/piechart#donut
export const DonutChart = () => {
  return (
    <ChartRenderer
      type="PieChart"
      onReady={(chartWrapper, dataTable, arrayToDataTable) => {
        var data = arrayToDataTable([
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7]
        ]);
        chartWrapper.setDataTable(data);
        chartWrapper.setOptions({
          title: "My Daily Activities",
          pieHole: 0.4,
          is3D: true
        });
      }}
    />
  );
};
