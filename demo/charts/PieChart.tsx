import * as React from "react";
import { dataBank } from "../dataBank";
import { Chart, ChartRenderer } from "../../src/Chart";
import {
  GoogleDataTableColumnType,
  GoogleDataTableColumnRoleType
} from "../../src";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/piechart
export const PieChart = () => {
  return (
    <ChartRenderer
      type="PieChart"
      onReady={(chartWrapper, dataTable, arrayToDataTable) => {
        var data = arrayToDataTable([
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7]
        ]);
        chartWrapper.setDataTable(data);
        chartWrapper.setOptions({
          title: "My Daily Activities"
        });
      }}
    />
  );
};
