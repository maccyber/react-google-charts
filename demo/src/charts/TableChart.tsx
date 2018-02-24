import * as React from "react";
import { ChartRenderer } from "../../../src/Chart";
import { GoogleDataTableColumnType } from "../../../src";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/tablechart
export const TableChart = () => {
  return (
    <ChartRenderer
      type="Table"
      onReady={(chartWrapper, dataTable) => {
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Name"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.number,
          label: "Salary"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.boolean,
          label: "Full Time Employee"
        });

        dataTable.addRows([
          ["Mike", { v: 10000, f: "$10,000" }, true],
          ["Jim", { v: 8000, f: "$8,000" }, false],
          ["Alice", { v: 12500, f: "$12,500" }, true],
          ["Bob", { v: 7000, f: "$7,000" }, true]
        ]);
      }}
    />
  );
};
