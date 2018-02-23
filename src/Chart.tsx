import * as React from "react";
import {
  GoogleChartLoader,
  ChartWrapper,
  GoogleChartWrapperChartType,
  VizEvents,
  GoogleChartWrapper
} from "./";

import {
  GoogleChartPackages,
  GoogleDataTable,
  GoogleArrayToDataTable
} from "./types";

import { ensureFunction } from "./utils/ensureFunction";
import { generateID } from "./utils/generateID";
import { indexBy } from "./utils/indexBy";

export type ChartProps = {
  type: string;
  options?: {
    width?: number;
    height?: number;
    title?: string;
  };
  points?: Array<{ x: any; y: any; label: any; type: string }>;
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

const getChartTypeFromChartName = (chartName: string) => {
  if (chartName in GoogleChartWrapperChartType) {
    return GoogleChartWrapperChartType[
      chartName as any
    ] as GoogleChartWrapperChartType;
  }
  console.error(
    `Could not find chartType : ${chartName}. Defaulting to ScatterChart`
  );
  return GoogleChartWrapperChartType.ScatterChart;
};

const padRight = (input: any[] = [], desiredLength = 0) => {
  const paddedInput = [...input];
  while (paddedInput.length < desiredLength) {
    paddedInput.push(null);
  }
  return paddedInput;
};

const getDataTableArrayFromDataPoints = (points: any[]) => {
  // const pointsIndexedByY = indexBy(points, "y");
  const pointsIndexedByX = indexBy(points, "x");
  const pointsIndexedByLabel = indexBy(points, "label");
  let rows = Array.from(pointsIndexedByX.keys()).map((x, i) => {
    const points = pointsIndexedByX.get(x) as Array<{ y: any }>;
    return [x, ...points.map(point => point.y)];
  });
  const longestRowLength = rows.reduce((previousMax, cur) => {
    const thisRowLength = cur.length;
    return thisRowLength > previousMax ? thisRowLength : previousMax;
  }, 0);

  // Pad smaller rows with null
  rows = rows.map(row => padRight(row, longestRowLength));
  const columns = [
    "",
    ...Array.from(pointsIndexedByLabel.keys()).map((label, i) => {
      const points = pointsIndexedByLabel.get(label);
      return { label, type: points[0].type };
    })
  ];
  return { rows, columns, dataTable: [columns, ...rows] };
};

export const getChartPackagesFromChartType = () => {
  return [] as Array<GoogleChartPackages>;
};

export class Chart extends React.Component<ChartProps, {}> {
  public static defaultProps = {
    type: "ScatterChart",
    points: [],
    options: {
      width: 800,
      height: 400,
      title: ""
    },

    onReady: () => {},
    onError: () => {},
    onSelect: () => {}
  };
  containerId: string;
  constructor(props: ChartProps) {
    super(props);
    const { containerId = null } = props;
    this.containerId =
      containerId !== null ? containerId : `google_chart_${generateID()}`;
  }
  render() {
    const {
      type,
      points = [],
      options,
      onReady,
      onError,
      onSelect
    } = this.props;
    const chartType = getChartTypeFromChartName(type);
    const { dataTable } = getDataTableArrayFromDataPoints(points);
    const packages = [GoogleChartPackages.corechart];
    return (
      <GoogleChartLoader
        packages={packages}
        render={() => (
          <ChartWrapper
            chartType={chartType}
            dataTable={dataTable}
            containerId={this.containerId}
            options={options}
            render={(chartProps, chartWrapper) => {
              return (
                <VizEvents
                  chartWrapper={chartWrapper}
                  onReady={onReady}
                  onError={onError}
                  onSelect={onSelect}
                />
              );
            }}
          />
        )}
      />
    );
  }
}

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
  render() {
    const packages = [GoogleChartPackages.corechart];
    const { type, options, onReady } = this.props;
    const vOnReady = ensureFunction(onReady);
    const chartType = getChartTypeFromChartName(type);
    return (
      <GoogleChartLoader
        packages={packages}
        render={() => (
          <ChartWrapper
            chartType={chartType}
            dataTable={[]}
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
              console.warn("Rendering");
            }}
          />
        )}
      />
    );
  }
}

// export class ChartFromDataTable extends React.Component {
//   render() {}
// }
