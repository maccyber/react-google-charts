import * as React from "react";
import { ChartRenderer } from "./ChartRenderer";

import { ChartFromPointsProps, GoogleChartWrapper } from "./types";

import { generateID } from "./utils/generateID";
import { getChartType } from "./utils/getChartType";
import { getDataTableArrayFromDataPoints } from "./utils/getDataTableArrayFromDataPoints";

export class ChartFromPoints extends React.Component<ChartFromPointsProps, {}> {
  chartWrapper?: GoogleChartWrapper;
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
  constructor(props: ChartFromPointsProps) {
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
    const chartType = getChartType(type);
    const { dataTable } = getDataTableArrayFromDataPoints(points);
    return (
      <ChartRenderer
        type={chartType}
        onReady={(chartWrapper: GoogleChartWrapper) => {
          chartWrapper.setOptions(options);
          chartWrapper.setDataTable(dataTable);
          this.chartWrapper = chartWrapper;
        }}
      />
    );
  }
}
