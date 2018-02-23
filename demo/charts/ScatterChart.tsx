import * as React from "react";
import { dataBank } from "../dataBank";
import { Chart } from "../../src/Chart";

const points = dataBank().points.attentionSpanOverTime;
const options = dataBank().options;

export const ScatterChart = () => {
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
};
