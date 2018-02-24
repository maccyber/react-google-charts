import * as React from "react";
import { GoogleChartLoader } from "./GoogleChartLoader";
import { ChartWrapper } from "./google-visualization/ChartWrapper";

import {
  GoogleChartPackages,
  GoogleDataTable,
  GoogleArrayToDataTable,
  GoogleChartWrapper
} from "./types";

import { ensureFunction } from "./utils/ensureFunction";
import { generateID } from "./utils/generateID";
import { getChartType } from "./utils/getChartType";

export type ChartProps = {
  type: string;
  options?: {
    width?: number;
    height?: number;
    title?: string;
  };
  points?: { x: any; y: any; label: any; type: string }[];
  containerId?: string;
  onReady?: () => any;
  onError?: () => any;
  onSelect?: (selection: any) => any;
};

export type ChartRendererProps = {
  type: string;
  options?: {
    width?: number;
    height?: number;
    title?: string;
  };
  containerId?: string;
  onReady?: (
    chartWrapper: GoogleChartWrapper,
    chartDataTable: GoogleDataTable,
    arrayToDataTable: GoogleArrayToDataTable
  ) => any;
  onError?: () => any;
  onSelect?: (selection: any) => any;
};

export class ChartRenderer extends React.Component<ChartRendererProps, {}> {
  containerId: string;
  static defaultProps = {
    type: "ScatterChart"
  };
  constructor(props: ChartProps) {
    super(props);
    const { containerId = null } = props;
    this.containerId =
      containerId !== null ? containerId : `google_chart_${generateID()}`;
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const packages = [GoogleChartPackages.corechart];
    const { type, options, onReady } = this.props;
    const vOnReady = ensureFunction(onReady);
    const chartType = getChartType(type);
    return (
      <div id={this.containerId}>
        <GoogleChartLoader
          packages={packages}
          render={() => (
            <ChartWrapper
              chartType={chartType}
              containerId={this.containerId}
              options={options}
              onReady={(
                chartWrapper: GoogleChartWrapper,
                chartDataTable: GoogleDataTable,
                arrayToDataTable: GoogleArrayToDataTable
              ) => {
                vOnReady(chartWrapper, chartDataTable, arrayToDataTable);
              }}
              render={() => {
                return null;
              }}
            />
          )}
        />
      </div>
    );
  }
}
