export interface ChartWrapperProps {
  chartType: GoogleChartWrapperChartType
  containerId?: string
  options?: {
    width?: number
    height?: number
    is3D?: boolean
    title?: string
  }
  dataTable?: {}
  dataSourceUrl?: string
  query?: string
  refreshInterval?: number
  view?: any[] | {}
  render?: (props: ChartWrapperProps, chartWrapper: GoogleChartWrapper) => any
  children?: (props: ChartWrapperProps, chartWrapper: GoogleChartWrapper) => any
}

export type VizEventsProps = {
  chartWrapper: GoogleChartWrapper
  onReady?: (chartWrapper: GoogleChartWrapper) => any
  onError?: (chartWrapper: GoogleChartWrapper) => any
  onSelect?: (selection: Array<{ row?: any; column?: any }>) => any
  render?: (props: VizEventsProps, chartWrapper: GoogleChartWrapper) => any
  children?: (props: VizEventsProps, chartWrapper: GoogleChartWrapper) => any
}

/* 
*
* <GoogleChartsTypes>
*
*/

/* 
*
* Reference + Docs: 
* https://developers.google.com/chart/interactive/docs/reference#constructor_3
* https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
*
*/
export enum GoogleChartWrapperChartType {
  AnnotationChart = 'AnnotationChart',
  AreaChart = 'AreaChart',
  BarChart = 'BarChart',
  BubbleChart = 'BubbleChart',
  Calendar = 'Calendar',
  CandlestickChart = 'CandlestickChart',
  ColumnChart = 'ColumnChart',
  ComboChart = 'ComboChart',
  DiffChart = 'DiffChart',
  DonutChart = 'DonutChart',
  GanttChart = 'GanttChart',
  GaugeChart = 'GaugeChart',
  GeoChart = 'GeoChart',
  Histogram = 'Histogram',
  LineChart = 'LineChart',
  Map = 'Map',
  OrgChart = 'OrgChart',
  PieChart = 'PieChart',
  Sankey = 'Sankey',
  ScatterChart = 'ScatterChart',
  SteppedAreaChart = 'SteppedAreaChart',
  TableChart = 'TableChart',
  TreeMap = 'TreeMap',
  WaterfallChart = 'WaterfallChart',
  WordTree = 'WordTree'
}

// https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
export interface ChartWrapperOptions {
  chartType: string
  containerId: string
  options?: {
    width: number
    height: number
    is3D: boolean
    title: string
  }
  dataTable?: {}
  dataSourceUrl?: string
  query?: string
  refreshInterval?: number
  view: any[] | {}
}

export type GoogleChartWrapper = {
  draw: (chartArgs?: ChartWrapperProps) => any
  toJSON: () => string
  clone: () => GoogleChartWrapper
  getDataSourceUrl: () => string
  getDataTable: () => null | any // null if datasourceurl set or ref to DataTable
  getChartType: () => GoogleChartWrapperChartType
  getChartName: () => string
  getChart: () => {
    getSelection: () => { row?: any; column?: any }[]
  } // ref to chart
  getContainerId: () => string
  getQuery: () => string
  getRefreshInterval: () => number
  getOption: (key: string, opt_default_value?: any) => any // returns opt_default_value if key not found
  getOptions: () => {}
  getSelection: () => { row?: any; column?: any }[]
  getView: () => {} | any[] // Same format as toJSON

  setDataSourceUrl: (url: string) => void
  setDataTable: (table: any) => void
  setChartType: (chartType: GoogleChartWrapperChartType) => void
  setChartName: (name: string) => void // Sets an arbitrary name for the chart. This is not shown anywhere on the chart, unless a custom chart is explicitly designed to use it.
  setContainerId: (id: string) => void // Sets the ID of the containing DOM element for the chart.
  setQuery: (query_string: string) => void // Sets a query string, if this chart queries a data source. You must also set the data source URL if specifying this value.
  setRefreshInterval: (interval: number) => void // Sets the refresh interval for this chart, if it queries a data source. You must also set a data source URL if specifying this value. Zero indicates no refresh.
  setOption: (key: string, value: any) => void // 	Sets a single chart option value, where key is the option name and value is the value. To unset an option, pass in null for the value. Note that key may be a qualified name, such as 'vAxis.title'.
  setOptions: (options_obj: ChartWrapperProps['options']) => void //
}

export enum GoogleVizEventName {
  ready = 'ready',
  error = 'error',
  select = 'select'
}

export type GoogleVizEvents = {
  addListener: (
    chartWrapper: GoogleChartWrapper,
    name: GoogleVizEventName,
    onEvent: (eventArgs: {}) => any
  ) => any
  removeAllListeners: (chartWrapper: GoogleChartWrapper) => any
}

export enum GoogleChartPackages {
  corechart = 'corechart',
  calendar = 'calendar',
  gantt = 'gantt',
  gauge = 'gauge',
  geochart = 'geochart',
  map = 'map',
  orgchart = 'orgchart',
  sankey = 'sankey',
  table = 'table',
  timeline = 'timeline',
  treemap = 'treemap',
  wordtree = 'wordtree'
}

enum GoogleChartVersion {
  current = 'current',
  upcoming = 'upcoming'
}

export enum GoogleDataTableColumnType {
  'string' = 'string',
  'number' = 'number',
  'boolean' = 'boolean',
  'date' = 'date',
  'datetime' = 'datetime',
  'timeofday' = 'timeofday'
}

export type GoogleDataTable = {
  addColumn: (type: GoogleDataTableColumnType) => number
}

/* 
*
* </GoogleChartsTypes>
*
*/
