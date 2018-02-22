import * as React from 'react'

import { loadGoogleScripts } from './loadGoogleScripts'
import { isFunction } from './utils/isFunction'
type GoogleChartLoaderState = {
  isLoaded: boolean
  isLoading: boolean
  hasErrored: boolean
  errorMessage: string
}

enum GoogleChartPackages {
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

type GoogleChartLoaderPropsAndState = {
  props: GoogleChartLoaderProps
  state: GoogleChartLoaderState
}

type GoogleChartLoaderProps = {
  window?: any
  version?: string | GoogleChartVersion
  language?: string
  packages?: Array<GoogleChartPackages>
  mapsApiKey?: string
  render: (propsAndState: GoogleChartLoaderPropsAndState) => any
  renderChart?: (propsAndState: GoogleChartLoaderPropsAndState) => any
  renderLoader?: (propsAndState: GoogleChartLoaderPropsAndState) => any
  renderError?: (propsAndState: GoogleChartLoaderPropsAndState) => any
}

const ensureFunction = (maybeFunction = (a: any) => null) => {
  return isFunction(maybeFunction) ? maybeFunction : (a: any) => null
}

class GoogleChartLoader extends React.Component<
  GoogleChartLoaderProps,
  GoogleChartLoaderState
> {
  static defaultProps = {
    window:
      typeof window === 'undefined' /* node env next (ssr) */ ? {} : window,
    packages: ['corechart'],
    version: 'current',
    language: 'en',
    mapsApiKey: null,
    renderLoader: ({ props, state }: GoogleChartLoaderPropsAndState) => (
      <div>Loading Chart.</div>
    ),
    render: ({ props, state }: GoogleChartLoaderPropsAndState) => (
      <div> Chart </div>
    ),
    renderError: ({ props, state }: GoogleChartLoaderPropsAndState) => (
      <div>'Error Loading Chart'</div>
    )
  }
  state = {
    isLoaded: false,
    isLoading: false,
    hasErrored: false,
    errorMessage: ''
  }
  loadGoogleCharts = async () => {
    const { version, language, packages, mapsApiKey, window } = this.props
    await loadGoogleScripts({ window })
    return new Promise(resolve => {
      window.google.charts.load(version, {
        language,
        packages,
        mapsApiKey,
        callback: resolve
      })
    })
  }
  handleError = (errorMessage = '') => {
    const { renderError = () => null } = this.props
    this.setState({
      isLoading: false,
      hasErrored: true,
      errorMessage: `Error in GoogleChartLoader : ${errorMessage}`
    })
    renderError({ props: this.props, state: this.state })
  }
  async componentDidMount() {
    const { state, props } = this
    const { window, version, language, packages, mapsApiKey } = props

    this.setState({ isLoading: true })
    try {
      await loadGoogleScripts({ window })
    } catch (err) {
      this.handleError(err.message)
    }
    try {
      await this.loadGoogleCharts()
      this.setState({ isLoading: false, isLoaded: true })
    } catch (err) {
      this.handleError(err.message)
    }
  }
  render() {
    const { props, state } = this
    const { isLoading, hasErrored, isLoaded } = state
    const { renderLoader, renderError, render, children } = props
    const vRenderLoader = ensureFunction(renderLoader)
    const vRenderError = ensureFunction(renderError)
    const vRender = ensureFunction(render)
    const vChildren = ensureFunction(children as () => any)
    return isLoading
      ? vRenderLoader({ props, state })
      : hasErrored
        ? vRenderError({ props, state })
        : isLoaded
          ? children || vRender({ props, state })
          : vRenderError({ props, state })
  }
}

export { GoogleChartLoader }
export default GoogleChartLoader
