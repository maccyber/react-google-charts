import * as React from "react";
import { ChartRenderer } from "../../../src/Chart";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#Waterfall
export const WaterfallChart = () => {
  return (
    <ChartRenderer
      type="CandlestickChart"
      onReady={(chartWrapper, dataTable, arrayToDataTable) => {
        var data = arrayToDataTable(
          [
            ["Mon", 20, 28, 38, 45],
            ["Tue", 31, 38, 55, 66],
            ["Wed", 50, 55, 77, 80],
            ["Thu", 77, 77, 66, 50],
            ["Fri", 68, 66, 22, 15]
          ],
          true // Treat first row as data as well.
        );
        chartWrapper.setDataTable(data);

        chartWrapper.setOptions({
          legend: "none",
          bar: { groupWidth: "100%" }, // Remove space between bars.
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
            risingColor: { strokeWidth: 0, fill: "#0f9d58" } // green
          }
        });
      }}
    />
  );
};
