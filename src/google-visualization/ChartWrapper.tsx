import * as React from 'react'

import { isFunction } from '../utils/isFunction'

import {
  GoogleChartWrapperChartType,
  ChartWrapperProps,
  GoogleChartWrapper
} from '../types'

let i = 0

const getID = () => {
  let containerID = `google_chart_div_${i}`
  i += 1
  return containerID
}

class ChartWrapper extends React.Component<ChartWrapperProps, {}> {
  chartWrapper: GoogleChartWrapper
  static defaultProps = {
    chartType: GoogleChartWrapperChartType.ColumnChart,
    dataTable: [[]],
    options: {},
    dataSourceUrl: '',
    query: '',
    refreshInterval: '',
    view: null,
    render: () => null,
    children: null
  }

  constructor(props: ChartWrapperProps) {
    super(props)
    // this.chartWrapper = {} as GoogleChartWrapper
    const { chartType, dataTable, options, containerId } = this.props
    if ('google' in window === false) {
      console.error(
        'ChartWrapper was rendered before google was loaded in window'
      )
      return
    }
    // @ts-ignore
    this.chartWrapper = new window.google.visualization.ChartWrapper({
      chartType,
      dataTable,
      options,
      containerId
    })
  }
  componentDidMount() {
    this.chartWrapper.draw()
  }
  componentDidUpdate() {
    const { chartType, dataTable, options, containerId } = this.props
    this.chartWrapper.setDataTable(dataTable)
    this.chartWrapper.setChartType(chartType)
    this.chartWrapper.setContainerId(containerId as string)
    this.chartWrapper.setOptions(options)
    this.chartWrapper.draw()
  }
  render() {
    const { render = () => null, children } = this.props
    const childrenRenderer = (isFunction(children) ? children : render) as (
      props: ChartWrapperProps,
      chartWrapper: GoogleChartWrapper
    ) => any
    return [
      <div
        id={`${this.props.containerId}`}
        key={`CHART_${this.props.containerId}`}
      />,
      <div
        id={`META_CHART_${this.props.containerId}`}
        key={`META_CHART_${this.props.containerId}`}
      >
        {childrenRenderer(this.props, this.chartWrapper)}
      </div>
    ]
  }
}

export default ChartWrapper
