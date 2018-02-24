import * as React from "react";
import { ChartRenderer, ChartFromDataTable } from "../../../src/Chart";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/barchart

const initialState = [
  ["Year", "Visitations", { role: "style" }],
  ["2010", 10, "color: gray"],
  ["2020", 14, "color: #76A7FA"],
  ["2030", 16, "color: blue"],
  ["2040", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  [
    "2050",
    28,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
  ]
];

export class BarChart extends React.Component<{}, {}> {
  state = {
    dataTable: initialState
  };
  intervalIDs: any[] = [];
  componentDidMount() {
    this.intervalIDs.push(
      setInterval(() => {
        this.setState(
          {
            dataTable: initialState.slice(0, Math.random() < 0.5 ? 3 : 4)
          },
          () => {
            console.warn(this.state.dataTable);
          }
        );
      }, 2000)
    );
  }
  componentWillUnmount() {
    this.intervalIDs.forEach(iID => clearInterval(iID));
  }
  render() {
    return (
      <ChartFromDataTable
        dataTable={this.state.dataTable}
        options={{ width: 400, height: 400 }}
        type={"BarChart"}
      />
    );
  }
}
