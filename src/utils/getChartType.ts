import { GoogleChartWrapperChartType } from "../types";

export const getChartType = (chartName: string) => {
  if (chartName in GoogleChartWrapperChartType) {
    return GoogleChartWrapperChartType[
      chartName as any
    ] as GoogleChartWrapperChartType;
  }
  console.error(
    `Could not find chartType : ${chartName}. Defaulting to ScatterChart`
  );
  return GoogleChartWrapperChartType.ScatterChart;
};
