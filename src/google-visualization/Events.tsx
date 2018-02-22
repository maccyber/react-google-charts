import * as React from 'react'
import { isFunction } from '../utils/isFunction'
import {
  GoogleChartWrapperChartType,
  ChartWrapperProps,
  GoogleChartWrapper,
  GoogleVizEventName,
  GoogleVizEvents,
  VizEventsProps
} from '../types'

class VizEvents extends React.Component<VizEventsProps, {}> {
  chartWrapper: GoogleChartWrapper
  static defaultProps = {
    chartWrapper: {},
    onReady: () => null,
    onError: () => null,
    onSelect: () => null,
    render: (props: VizEventsProps, chartWrapper: GoogleChartWrapper) => {
      return null
    },
    children: null
  }
  constructor(props: VizEventsProps) {
    super(props)
    this.chartWrapper = {} as GoogleChartWrapper
  }
  componentDidMount() {
    this.unbindVizEvents()
    this.bindVizEvents()
  }
  componentDidUpdate() {
    this.unbindVizEvents()
    this.bindVizEvents()
  }
  componentWillUnmount() {
    this.unbindVizEvents()
  }
  render() {
    const { render = () => null, children } = this.props
    const childrenRenderer = isFunction(children) ? children : render
    return render(this.props, this.chartWrapper)
  }
  unbindVizEvents() {
    const { chartWrapper } = this.props
    if (chartWrapper === null) return
    if (!('google' in window)) return
    // @ts-ignore
    const viz = window.google.visualization.events as GoogleVizEvents
    viz.removeAllListeners(chartWrapper)
  }
  bindVizEvents() {
    const {
      chartWrapper,
      onReady = () => {},
      onError = () => {},
      onSelect = () => {}
    } = this.props
    if (chartWrapper === null) return
    if (!('google' in window)) return
    // @ts-ignore
    const viz = window.google.visualization.events as GoogleVizEvents
    // viz.removeAllListeners(chartWrapper)

    if (onReady !== null) {
      viz.addListener(chartWrapper, GoogleVizEventName.ready, () => {
        onReady(chartWrapper)
      })
    }
    if (onError !== null) {
      viz.addListener(chartWrapper, GoogleVizEventName.error, () => {
        onError(chartWrapper)
      })
    }
    if (onSelect !== null) {
      viz.addListener(chartWrapper, GoogleVizEventName.select, () => {
        onSelect(chartWrapper.getChart().getSelection())
      })
    }
  }
}

export { VizEvents }
export default VizEvents
