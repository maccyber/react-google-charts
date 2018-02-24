import * as React from "react";
import { ChartRenderer } from "../../../src/Chart";
import { GoogleDataTableColumnType } from "../../../src";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/orgchart
export const Sankey = () => {
  return (
    <ChartRenderer
      type="Sankey"
      onReady={(chartWrapper, dataTable) => {
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "From"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "To"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.number,
          label: "Weight"
        });

        // For each orgchart box, provide the name, manager, and tooltip to show.
        dataTable.addRows([
          ["A", "X", 5],
          ["A", "Y", 7],
          ["A", "Z", 6],
          ["B", "X", 2],
          ["B", "Y", 9],
          ["B", "Z", 4]
        ]);
        chartWrapper.setOptions({
          width: 600
        });
      }}
    />
  );
};
