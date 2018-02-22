import * as React from 'react'
import {
  GoogleChartLoader,
  ChartWrapper,
  GoogleChartWrapperChartType,
  VizEvents,
  GoogleChartWrapper
} from '../../src/'

const dataTable = [
  ['', { label: 'Germany', type: 'number' }, 'Brazil'],
  ['', 300, 400]
]

export const ScatterChart = () => {
  return (
    <GoogleChartLoader
      render={() => (
        <ChartWrapper
          chartType={GoogleChartWrapperChartType['ScatterChart']}
          dataTable={dataTable}
          containerId="ScatterChart"
        />
      )}
    />
  )
}

export class ScatterChartWithEvents extends React.Component {
  state = {
    selection: []
  }
  render() {
    return (
      <GoogleChartLoader
        renderLoader={() => `⏲`}
        render={() => (
          <ChartWrapper
            chartType={GoogleChartWrapperChartType.ScatterChart}
            dataTable={dataTable}
            options={{
              width: 800,
              height: 400,
              title: 'Scatter Chart With Events'
            }}
            containerId="ScatterChartWithEvents"
          >
            {(chartWrapperProps, chartWrapper: GoogleChartWrapper) => {
              const { options: { width } } = chartWrapperProps
              return [
                <div
                  id=""
                  key="K"
                  style={{
                    textAlign: 'center',
                    width: width,
                    height: 20
                  }}
                >
                  Selection : {JSON.stringify(this.state.selection)}
                </div>,
                <VizEvents
                  key="b"
                  chartWrapper={chartWrapper}
                  onReady={() => {}}
                  onSelect={selection => {
                    console.warn(selection)
                    this.setState({ selection })
                  }}
                />
              ]
            }}
          </ChartWrapper>
        )}
      />
    )
  }
}
