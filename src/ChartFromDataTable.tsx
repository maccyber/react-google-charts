import * as React from "react";

import { ChartRenderer } from "./ChartRenderer";

import {
  GoogleDataTable,
  GoogleArrayToDataTable,
  GoogleChartOptions,
  GoogleChartWrapper
} from "./types";

import { getChartType } from "./utils/getChartType";

export type ChartFromDataTableProps = {
  dataTable: any[][];
  options: GoogleChartOptions;
  containerId?: string | undefined;
  type: string;
};

export class ChartFromDataTable extends React.Component<
  ChartFromDataTableProps,
  {}
> {
  chartWrapper?: GoogleChartWrapper;
  chartDataTable?: GoogleDataTable;
  arrayToDataTable?: GoogleArrayToDataTable;
  componentDidUpdate() {
    const { options, dataTable } = this.props;
    try {
      if (this.chartWrapper) {
        this.chartWrapper.setDataTable(dataTable);
        this.chartWrapper.setOptions(options);
        this.chartWrapper.draw();
      }
    } catch (err) {
      console.error(
        "Error in ChartFromDataTable on componentDidUpdate:  " + err.message
      );
    }
  }
  render() {
    const { type, options } = this.props;
    const chartType = getChartType(type);
    return (
      <ChartRenderer
        type={chartType}
        onReady={(chartWrapper: GoogleChartWrapper) => {
          const { dataTable } = this.props;
          chartWrapper.setOptions(options);
          chartWrapper.setDataTable(dataTable);
          this.chartWrapper = chartWrapper;
        }}
      />
    );
  }
}
