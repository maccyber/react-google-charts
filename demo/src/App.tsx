import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";

import {
  GoogleChartLoader,
  ChartRenderer,
  GoogleDataTableColumnType
} from "../../src/";
// import GoogleChartLoader from '../src/GoogleChartLoader'
import { ChartWrapper } from "../../src/google-visualization/ChartWrapper";
import Events from "../../src/google-visualization/Events";

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
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">{name}</p>
              </header>
              <div className="card-content">{render()}</div>
              <footer className="card-footer">
                <a
                  href={`https://github.com/RakanNimer/react-google-charts/blob/ts-rewrite/demo/charts/${name}.tsx`}
                  className="card-footer-item"
                  target="_blank"
                >
                  View Code
                </a>
                <a href="#" className="card-footer-item">
                  Edit
                </a>
              </footer>
            </div>
          )}
        />
      ))}
    </div>
  );
};

const Navigation = withRouter(props => {
  const navigationLinks = charts.map(({ name, render }, i) => (
    <li
      key={name}
      className={
        props.location.pathname.endsWith(name) ? "is-active tab" : `tab`
      }
    >
      <NavLink key={name} to={`/${name}`}>
        {name}
      </NavLink>
    </li>
  ));

  const rowSize = 3;
  let navigationRows = [];
  while (navigationLinks.length > 0)
    navigationRows.push(navigationLinks.splice(0, rowSize));

  return (
    <nav className="tabs" style={{ marginTop: 10, marginBottom: 30 }}>
      {navigationRows.map((row, i) => (
        <div key={i}>
          {row}
          <br />
        </div>
      ))}
    </nav>
  );
});

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container is-fluid">
          <Route render={() => <Navigation />} />
          <Charts />
        </div>
      </Router>
    );
  }
}
