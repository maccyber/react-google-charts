import * as React from "react";
import { ChartRenderer } from "../../../src/Chart";
import { GoogleDataTableColumnType } from "../../../src";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/orgchart
export const OrgChart = () => {
  return (
    <ChartRenderer
      type="OrgChart"
      onReady={(chartWrapper, dataTable) => {
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Name"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Manager"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "ToolTip"
        });

        // For each orgchart box, provide the name, manager, and tooltip to show.
        dataTable.addRows([
          [
            {
              v: "Mike",
              f: 'Mike<div style="color:red; font-style:italic">President</div>'
            },
            "",
            "The President"
          ],
          [
            {
              v: "Jim",
              f:
                'Jim<div style="color:red; font-style:italic">Vice President</div>'
            },
            "Mike",
            "VP"
          ],
          ["Alice", "Mike", ""],
          ["Bob", "Jim", "Bob Sponge"],
          ["Carol", "Bob", ""]
        ]);
        chartWrapper.setOptions({
          allowHtml: true
        });
      }}
    />
  );
};
