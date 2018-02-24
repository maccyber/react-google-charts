import * as React from "react";

import { isFunction } from "../utils/isFunction";
import { ensureFunction } from "../utils/ensureFunction";
import {
  GoogleChartWrapperChartType,
  ChartWrapperProps,
  GoogleChartWrapper,
  GoogleDataTable,
  GoogleArrayToDataTable
} from "../types";

class ChartWrapper extends React.Component<ChartWrapperProps, {}> {
  // @ts-ignore
  chartWrapper: GoogleChartWrapper;
  // @ts-ignore
  arrayToDataTable: GoogleArrayToDataTable;
  static defaultProps = {
    chartType: GoogleChartWrapperChartType.ColumnChart,
    dataTable: [[]],
    options: {},
    dataSourceUrl: "",
    query: "",
    refreshInterval: "",
    view: null,
    render: () => null,
    children: null,
    onReady: (
      chartWrapper: GoogleChartWrapper,
      dataTable: GoogleDataTable | null
    ) => {}
  };

  constructor(props: ChartWrapperProps) {
    super(props);

    // this.chartWrapper = {} as GoogleChartWrapper
    const { chartType, dataTable, options, containerId, onReady } = this.props;
    if ("google" in window === false) {
      console.error(
        "ChartWrapper was rendered before google was loaded in window"
      );
      return;
    }
    // @ts-ignore
    this.chartWrapper = new window.google.visualization.ChartWrapper({
      chartType,
      dataTable,
      options,
      containerId
    });
    const vOnReady = ensureFunction(onReady);

    // @ts-ignore
    this.arrayToDataTable = window.google.visualization.arrayToDataTable;
    vOnReady(
      this.chartWrapper,
      this.chartWrapper.getDataTable(),
      this.arrayToDataTable
    );
  }
  componentDidCatch() {
    console.warn("Error");
  }
  componentDidMount() {
    console.log(`Mounting ChartWrapper`);
    this.chartWrapper.draw();
  }
  componentDidUpdate() {
    console.log(`Updating ChartWrapper`);
    // const { chartType, options, containerId } = this.props;
    // this.chartWrapper.setChartType(chartType);
    // this.chartWrapper.setContainerId(containerId as string);
    // this.chartWrapper.setOptions(options);
    // this.chartWrapper.draw();
  }
  render() {
    const { render = () => null, children } = this.props;
    const childrenRenderer = (isFunction(children) ? children : render) as (
      props: ChartWrapperProps,
      chartWrapper: GoogleChartWrapper,
      arrayToDataTable: GoogleArrayToDataTable
    ) => any;
    return [
      <div
        id={`${this.props.containerId}`}
        key={`CHART_${this.props.containerId}`}
      />,
      <div
        id={`META_CHART_${this.props.containerId}`}
        key={`META_CHART_${this.props.containerId}`}
      >
        {childrenRenderer(this.props, this.chartWrapper, this.arrayToDataTable)}
      </div>
    ];
  }
}
export { ChartWrapper };
export default ChartWrapper;
