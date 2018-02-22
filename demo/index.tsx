import * as React from "react";
import * as ReactDOM from "react-dom";

import { GoogleChartLoader, GoogleDataTableColumnType } from "../src/";
// import GoogleChartLoader from '../src/GoogleChartLoader'
import ChartWrapper from "../src/google-visualization/ChartWrapper";
import Events from "../src/google-visualization/Events";

import { Chart, ChartRenderer } from "../src/Chart";

import { ScatterChart } from "./charts/ScatterChart";
import { AnnotationChart } from "./charts/AnnotationChart";
import { AreaChart } from "./charts/AreaChart";
import { Calendar } from "./charts/Calendar";
import { BarChart } from "./charts/BarChart";
import { BubbleChart } from "./charts/BubbleChart";
import { CandlestickChart } from "./charts/CandlestickChart";
import { ColumnChart } from "./charts/ColumnChart";
import { DonutChart } from "./charts/DonutChart";
import { GanttChart } from "./charts/GanttChart";
import { GaugeChart } from "./charts/GaugeChart";
import { GeoChart } from "./charts/GeoChart";
import { Histogram } from "./charts/Histogram";
import { LineChart } from "./charts/LineChart";
import { OrgChart } from "./charts/OrgChart";
import { PieChart } from "./charts/PieChart";
import { Sankey } from "./charts/Sankey";
import { SteppedAreaChart } from "./charts/SteppedAreaChart";
import { TableChart } from "./charts/TableChart";
import { TreeMap } from "./charts/TreeMap";
import { WaterfallChart } from "./charts/WaterfallChart";
import { WordTree } from "./charts/WordTree";

const dataTable = [
  ["", { label: "Germany", type: "number" }, "Brazil"],
  [["", 300, 400], ["", 100, 200]]
];

class ReactiveApp extends React.Component {
  state = {
    germanyPoints: [
      { x: "2015", y: 300, label: "Germany", type: "number" },
      { x: "2016", y: 400, label: "Germany", type: "number" },
      { x: "2017", y: 600, label: "Germany", type: "number" },
      { x: "2018", y: 600, label: "Germany", type: "number" },
      { x: "2019", y: 600, label: "Germany", type: "number" }
    ],
    brazilPoints: [
      { x: "2015", y: 100, label: "Brazil", type: "number" },
      { x: "2016", y: 200, label: "Brazil", type: "number" },
      { x: "2017", y: 600, label: "Brazil", type: "number" },
      { x: "2018", y: 60, label: "Brazil", type: "number" },
      { x: "2019", y: 40, label: "Brazil", type: "number" }
    ]
  };
  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>ScatterChart</h3>
        <ScatterChart />

        <h3>AnnotationChart</h3>
        <AnnotationChart />
        <h3>AreaChart</h3>
        <AreaChart />
        <h3>BarChart</h3>
        <BarChart />
        <h3>BubbleChart</h3>
        <BubbleChart />
        <h3>Calendar</h3>
        <Calendar />
        <h3>CandlestickChart</h3>
        <CandlestickChart />

        <h3>ColumnChart</h3>
        <ColumnChart />
        <h3>DonutChart</h3>
        <DonutChart />
        <h3>GanttChart</h3>
        <GanttChart />
        <h3>GaugeChart</h3>
        <GaugeChart />
        <h3>GeoChart</h3>
        <GeoChart />

        <h3>Histogram</h3>
        <Histogram />

        <h3>LineChart</h3>
        <LineChart />

        <h3>OrgChart</h3>
        <OrgChart />

        <h3>PieChart</h3>
        <PieChart />

        <h3>Sankey</h3>
        <Sankey />

        <h3>ScatterChart</h3>
        <ScatterChart />

        <h3>SteppedAreaChart</h3>
        <SteppedAreaChart />

        <h3>TableChart</h3>
        <TableChart />

        <h3>TreeMap</h3>
        <TreeMap />

        <h3>WaterfallChart</h3>
        <WaterfallChart />

        <h3>WordTree</h3>
        <WordTree />
      </div>
    );
  }
}

ReactDOM.render(<ReactiveApp />, document.getElementById("app"));
