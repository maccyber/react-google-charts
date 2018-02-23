import * as React from "react";
import { ChartRenderer } from "../../src/Chart";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/barchart

export const BarChart = () => {
  return (
    <ChartRenderer
      type="BarChart"
      onReady={(chartWrapper, dataTable) => {
        chartWrapper.setDataTable([
          ["Year", "Visitations", { role: "style" }],
          ["2010", 10, "color: gray"],
          ["2020", 14, "color: #76A7FA"],
          ["2030", 16, "opacity: 0.2"],
          [
            "2040",
            22,
            "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"
          ],
          [
            "2050",
            28,
            "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
          ]
        ]);
      }}
    />
  );
};
