import * as React from "react";
import { ChartRenderer } from "../../../src/Chart";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/gauge
export class GaugeChart extends React.Component<{}, {}> {
  intervalIDs = [];
  startChartMutators = chartWrapper => {
    const dataTable = chartWrapper.getDataTable();
    this.intervalIDs.push(
      setInterval(function() {
        dataTable.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chartWrapper.draw();
      }, 13000)
    );
    this.intervalIDs.push(
      setInterval(function() {
        dataTable.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        chartWrapper.draw();
      }, 5000)
    );
    this.intervalIDs.push(
      setInterval(function() {
        dataTable.setValue(2, 1, 40 + Math.round(60 * Math.random()));
        chartWrapper.draw();
      }, 20000)
    );
  };
  componentWillUnmount() {
    this.intervalIDs.forEach(intervalID => {
      clearInterval(intervalID);
    });
  }
  render() {
    return (
      <ChartRenderer
        type="Gauge"
        onReady={(chartWrapper, dataTable, arrayToDataTable) => {
          var data = arrayToDataTable([
            ["Label", "Value"],
            ["Memory", 80],
            ["CPU", 55],
            ["Network", 68]
          ]);
          chartWrapper.setDataTable(data);
          chartWrapper.setOptions({
            width: 400,
            height: 120,
            redFrom: 90,
            redTo: 100,
            yellowFrom: 75,
            yellowTo: 90,
            minorTicks: 5
          });
          this.startChartMutators(chartWrapper);
        }}
      />
    );
  }
}
