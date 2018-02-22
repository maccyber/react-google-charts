import * as React from "react";
import { dataBank } from "../dataBank";
import { Chart, ChartRenderer } from "../../src/Chart";
import {
  GoogleDataTableColumnType,
  GoogleDataTableColumnRoleType
} from "../../src";

const daysToMilliseconds = days => {
  return days * 24 * 60 * 60 * 1000;
};

// Ref : https://developers.google.com/chart/interactive/docs/gallery/ganttchart
export const GanttChart = () => {
  return (
    <ChartRenderer
      type="Gantt"
      onReady={(chartWrapper, dataTable, arrayToDataTable) => {
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Task ID"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Task Name"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.date,
          label: "Start Date"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.date,
          label: "End Date"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.number,
          label: "Duration"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.number,
          label: "Percent Complete"
        });
        dataTable.addColumn({
          type: GoogleDataTableColumnType.string,
          label: "Dependencies"
        });

        dataTable.addRows([
          [
            "Research",
            "Find sources",
            new Date(2015, 0, 1),
            new Date(2015, 0, 5),
            null,
            100,
            null
          ],
          [
            "Write",
            "Write paper",
            null,
            new Date(2015, 0, 9),
            daysToMilliseconds(3),
            25,
            "Research,Outline"
          ],
          [
            "Cite",
            "Create bibliography",
            null,
            new Date(2015, 0, 7),
            daysToMilliseconds(1),
            20,
            "Research"
          ],
          [
            "Complete",
            "Hand in paper",
            null,
            new Date(2015, 0, 10),
            daysToMilliseconds(1),
            0,
            "Cite,Write"
          ],
          [
            "Outline",
            "Outline paper",
            null,
            new Date(2015, 0, 6),
            daysToMilliseconds(1),
            100,
            "Research"
          ]
        ]);
      }}
    />
  );
};
