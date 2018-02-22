import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { GoogleChartLoader } from '../src/'
// import GoogleChartLoader from '../src/GoogleChartLoader'
import ChartWrapper from '../src/google-visualization/ChartWrapper'
import Events from '../src/google-visualization/Events'

import { Chart } from '../src/Chart'

import { ScatterChart, ScatterChartWithEvents } from './charts/ScatterChart'

const dataTable = [
  ['', { label: 'Germany', type: 'number' }, 'Brazil'],
  [['', 300, 400], ['', 100, 200]]
]

class ReactiveApp extends React.Component {
  state = {
    germanyPoints: [
      { x: '2015', y: 300, label: 'Germany', type: 'number' },
      { x: '2016', y: 400, label: 'Germany', type: 'number' },
      { x: '2017', y: 600, label: 'Germany', type: 'number' },
      { x: '2018', y: 600, label: 'Germany', type: 'number' },
      { x: '2019', y: 600, label: 'Germany', type: 'number' }
    ],
    brazilPoints: [
      { x: '2015', y: 100, label: 'Brazil', type: 'number' },
      { x: '2016', y: 200, label: 'Brazil', type: 'number' },
      { x: '2017', y: 600, label: 'Brazil', type: 'number' },
      { x: '2018', y: 60, label: 'Brazil', type: 'number' },
      { x: '2019', y: 40, label: 'Brazil', type: 'number' }
    ]
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Chart
          points={[...this.state.germanyPoints, ...this.state.brazilPoints]}
          type="ScatterChart"
          options={{
            title: 'My Chart',
            width: 800,
            height: 400
          }}
          onReady={() => {
            console.warn('onReady')
          }}
          onError={() => {
            console.warn('onError')
          }}
          onSelect={selection => {
            console.warn('onSelect ' + JSON.stringify(selection, null, 2))
          }}
        />
        {/* <ScatterChart />
        <ScatterChartWithEvents /> */}
      </div>
    )
  }
}

ReactDOM.render(<ReactiveApp />, document.getElementById('app'))
