import * as React from "react";

import {
  GoogleChartLoaderProps,
  GoogleChartLoaderPropsAndState,
  GoogleChartLoaderState
} from "./types";

import { loadGoogleScripts } from "./loadGoogleScripts";
import { isFunction } from "./utils/isFunction";

const ensureFunction = (maybeFunction = (a: any) => null) => {
  return isFunction(maybeFunction) ? maybeFunction : (a: any) => null;
};

class GoogleChartLoader extends React.Component<
  GoogleChartLoaderProps,
  GoogleChartLoaderState
> {
  static defaultProps = {
    window:
      typeof window === "undefined" /* node env next (ssr) */ ? {} : window,
    packages: ["corechart"],
    version: "current",
    language: "en",
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
  };
  state = {
    isLoaded: false,
    isLoading: false,
    hasErrored: false,
    errorMessage: ""
  };
  loadGoogleCharts = async () => {
    const { version, language, packages, mapsApiKey, window } = this.props;
    await loadGoogleScripts({ window });
    return new Promise(resolve => {
      window.google.charts.load(version, {
        language,
        packages,
        mapsApiKey,
        callback: resolve
      });
    });
  };
  handleError = (errorMessage = "") => {
    const { renderError = () => null } = this.props;
    this.setState({
      isLoading: false,
      hasErrored: true,
      errorMessage: `Error in GoogleChartLoader : ${errorMessage}`
    });
    renderError({ props: this.props, state: this.state });
  };
  componentDidMount() {
    const { window } = this.props;

    this.setState({ isLoading: true });
    loadGoogleScripts({ window })
      .then(() => {
        return this.loadGoogleCharts();
      })
      .then(() => {
        this.setState({ isLoading: false, isLoaded: true });
      })
      .catch(err => {
        this.handleError(err.message);
      });
  }
  render() {
    const { props, state } = this;
    const { isLoading, hasErrored, isLoaded } = state;
    const { renderLoader, renderError, render, children } = props;
    const vRenderLoader = ensureFunction(renderLoader);
    const vRenderError = ensureFunction(renderError);
    const vRender = ensureFunction(render);
    const vChildren = ensureFunction(children as () => any);
    return isLoading
      ? vRenderLoader({ props, state })
      : hasErrored
        ? vRenderError({ props, state })
        : isLoaded
          ? vChildren({ props, state }) || vRender({ props, state })
          : vRenderError({ props, state });
  }
}

export { GoogleChartLoader };
export default GoogleChartLoader;
