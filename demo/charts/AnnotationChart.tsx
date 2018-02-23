import * as React from "react";
import { ChartRenderer } from "../../src/Chart";
import { GoogleDataTableColumnType } from "../../src";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/annotationchart
export const AnnotationChart = () => {
  return (
    <ChartRenderer
      type="AnnotationChart"
      onReady={(chartWrapper, dataTable) => {
        dataTable.addColumn({
          type: GoogleDataTableColumnType.date,
          label: "Date"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.number,
          label: "Kepler-22b mission"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Kepler title"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Kepler text"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.number,
          label: "Gliese 163 mission"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Gliese title"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Gliese text"
        });
        dataTable.addRows([
          [
            new Date(2314, 2, 15),
            12400,
            undefined,
            undefined,
            10645,
            undefined,
            undefined
          ],
          [
            new Date(2314, 2, 16),
            24045,
            "Lalibertines",
            "First encounter",
            12374,
            undefined,
            undefined
          ],
          [
            new Date(2314, 2, 17),
            35022,
            "Lalibertines",
            "They are very tall",
            15766,
            "Gallantors",
            "First Encounter"
          ],
          [
            new Date(2314, 2, 18),
            12284,
            "Lalibertines",
            "Attack on our crew!",
            34334,
            "Gallantors",
            "Statement of shared principles"
          ],
          [
            new Date(2314, 2, 19),
            8476,
            "Lalibertines",
            "Heavy casualties",
            66467,
            "Gallantors",
            "Mysteries revealed"
          ],
          [
            new Date(2314, 2, 20),
            0,
            "Lalibertines",
            "All crew lost",
            79463,
            "Gallantors",
            "Omniscience achieved"
          ]
        ]);
      }}
    />
  );
};
