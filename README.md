# React Google Charts

A thin wrapper around the Google Charts library.

### Installation

```
yarn add react-google-charts@latest
## OR
npm i --save react-google-charts@latest
```

### Usage 

Start by importing one of the 2 react components provided : 

```javascript
import {Chart, ChartRenderer} from 'react-google-charts'
```

#### Use cases

### I have a bunch of points that I want to render as a pretty graph.
```javascript
import {Chart} from 'react-google-charts'

const points = [
  {
    { x: "2015", y: 30, label: "AttentionSpan", type: "number" },
    { x: "2016", y: 20, label: "AttentionSpan", type: "number" },
    { x: "2017", y: 10, label: "AttentionSpan", type: "number" },
    { x: "2018", y: 5, label: "AttentionSpan", type: "number" },
    { x: "2019", y: 1, label: "AttentionSpan", type: "number" }
  }
]

const options = {
  width: 400,
  height: 400
}

// Then, in your render method : 

render() {
  return (
    <Chart
      points={points}
      type="ScatterChart"
      options={options}
      onReady={() => {
        console.warn("onReady");
      }}
      onError={() => {
        console.warn("onError");
      }}
      onSelect={selection => {
        console.warn("onSelect " + JSON.stringify(selection, null, 2));
      }}
    />
  );
}

```

### I want to use Google Charts primitives to build complex graphs and/or follow Google Charts docs.

Google Charts offers very powerful primitives to build all kind of charts.

The ChartRenderer loads and gives you access to : 

- [Google Chart Wrapper](https://developers.google.com/chart/interactive/docs/reference#chartwrapper-class)

- [Google Data Table](https://developers.google.com/chart/interactive/docs/reference#DataTable)

- [Google Visualization Helper: arrayToDataTable](https://developers.google.com/chart/interactive/docs/reference#google.visualization.arraytodatatable)

Typescript typings for these 3 are provided, to try and limit constantly searching the docs.




## All Examples

- [AnnotationChart](./demo/charts/AnnotationChart.tsx)
- [AreaChart](./demo/charts/AreaChart.tsx)
- [BarChart](./demo/charts/BarChart.tsx)
- [BubbleChart](./demo/charts/BubbleChart.tsx)
- [Calendar](./demo/charts/Calendar.tsx)
- [CandlestickChart](./demo/charts/CandlestickChart.tsx)
- [ColumnChart](./demo/charts/ColumnChart.tsx)
- [DonutChart](./demo/charts/DonutChart.tsx)
- [GanttChart](./demo/charts/GanttChart.tsx)
- [GaugeChart](./demo/charts/GaugeChart.tsx)
- [GeoChart](./demo/charts/GeoChart.tsx)  
- [Histogram](./demo/charts/Histogram.tsx)  
- [LineChart](./demo/charts/LineChart.tsx)  
- [OrgChart](./demo/charts/OrgChart.tsx)  
- [PieChart](./demo/charts/PieChart.tsx)
- [Sankey](./demo/charts/Sankey.tsx)
- [ScatterChart](./demo/charts/ScatterChart.tsx)
- [SteppedAreaChart](./demo/charts/SteppedAreaChart.tsx)
- [TableChart](./demo/charts/TableChart.tsx)
- [TreeMap](./demo/charts/TreeMap.tsx)
- [WaterfallChart](./demo/charts/WaterfallChart.tsx)
- [WordTree](./demo/charts/WordTree.tsx)



