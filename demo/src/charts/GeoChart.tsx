import * as React from "react";
import { dataBank } from "../dataBank";
import { ChartRenderer } from "../../../src/Chart";

const options = dataBank().options;

// Ref : https://developers.google.com/chart/interactive/docs/gallery/geochart
export const GeoChart = () => {
  return (
    <ChartRenderer
      type="GeoChart"
      onReady={(chartWrapper, dataTable) => {
        chartWrapper.setOptions(options);
        chartWrapper.setDataTable([
          ["Country", "Popularity"],
          ["Germany", 200],
          ["United States", 300],
          ["Brazil", 400],
          ["Canada", 500],
          ["France", 600],
          ["RU", 700]
        ]);
      }}
    />
  );
};
