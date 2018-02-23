import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GoogleChartLoader, GoogleDataTableColumnType } from "../src/";
// import GoogleChartLoader from '../src/GoogleChartLoader'
import ChartWrapper from "../src/google-visualization/ChartWrapper";
import Events from "../src/google-visualization/Events";

import { Chart, ChartRenderer } from "../src/Chart";

import {
  ScatterChart,
  AnnotationChart,
  AreaChart,
  Calendar,
  BarChart,
  BubbleChart,
  CandlestickChart,
  ColumnChart,
  DonutChart,
  GanttChart,
  GaugeChart,
  GeoChart,
  Histogram,
  LineChart,
  OrgChart,
  PieChart,
  Sankey,
  SteppedAreaChart,
  TableChart,
  TreeMap,
  WaterfallChart,
  WordTree
} from "./charts/";

const charts = [
  {
    name: "ScatterChart",
    render: () => {
      return <ScatterChart />;
    }
  },
  {
    name: "AnnotationChart",
    render: () => {
      return <AnnotationChart />;
    }
  },
  {
    name: "AreaChart",
    render: () => {
      return <AreaChart />;
    }
  },
  {
    name: "Calendar",
    render: () => {
      return <Calendar />;
    }
  },
  {
    name: "BarChart",
    render: () => {
      return <BarChart />;
    }
  },
  {
    name: "BubbleChart",
    render: () => {
      return <BubbleChart />;
    }
  },
  {
    name: "CandlestickChart",
    render: () => {
      return <CandlestickChart />;
    }
  },
  {
    name: "ColumnChart",
    render: () => {
      return <ColumnChart />;
    }
  },
  {
    name: "DonutChart",
    render: () => {
      return <DonutChart />;
    }
  },
  {
    name: "GanttChart",
    render: () => {
      return <GanttChart />;
    }
  },
  {
    name: "GaugeChart",
    render: () => {
      return <GaugeChart />;
    }
  },
  {
    name: "GeoChart",
    render: () => {
      return <GeoChart />;
    }
  },
  {
    name: "Histogram",
    render: () => {
      return <Histogram />;
    }
  },
  {
    name: "LineChart",
    render: () => {
      return <LineChart />;
    }
  },
  {
    name: "OrgChart",
    render: () => {
      return <OrgChart />;
    }
  },
  {
    name: "PieChart",
    render: () => {
      return <PieChart />;
    }
  },
  {
    name: "Sankey",
    render: () => {
      return <Sankey />;
    }
  },
  {
    name: "SteppedAreaChart",
    render: () => {
      return <SteppedAreaChart />;
    }
  },
  {
    name: "TableChart",
    render: () => {
      return <TableChart />;
    }
  },
  {
    name: "TreeMap",
    render: () => {
      return <TreeMap />;
    }
  },
  {
    name: "WaterfallChart",
    render: () => {
      return <WaterfallChart />;
    }
  },
  {
    name: "WordTree",
    render: () => {
      return <WordTree />;
    }
  }
];

const Charts = () => {
  return (
    <div className="charts">
      {charts.map(({ name, render }) => (
        <Route
          key={name}
          exact={true}
          path={`/${name}`}
          render={() => (
            <>
              <h3>{name}</h3>
              {render()}
            </>
          )}
        />
      ))}
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="navigation" style={{ overflow: "auto" }}>
      <ul>
        {charts.map(({ name, render }) => (
          <li style={{ padding: 5 }}>
            <Link key={name} to={`/${name}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Charts />
          <Navigation />
        </>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
