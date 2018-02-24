import { indexBy } from "./indexBy";
import { padRight } from "./padRight";

export const getDataTableArrayFromDataPoints = (points: any[]) => {
  // const pointsIndexedByY = indexBy(points, "y");
  const pointsIndexedByX = indexBy(points, "x");
  const pointsIndexedByLabel = indexBy(points, "label");
  let rows = Array.from(pointsIndexedByX.keys()).map((x, i) => {
    const points = pointsIndexedByX.get(x) as Array<{ y: any }>;
    return [x, ...points.map(point => point.y)];
  });
  const longestRowLength = rows.reduce((previousMax, cur) => {
    const thisRowLength = cur.length;
    return thisRowLength > previousMax ? thisRowLength : previousMax;
  }, 0);

  // Pad smaller rows with null
  rows = rows.map(row => padRight(row, longestRowLength));
  const columns = [
    "",
    ...Array.from(pointsIndexedByLabel.keys()).map((label, i) => {
      const points = pointsIndexedByLabel.get(label);
      return { label, type: points[0].type };
    })
  ];
  return { rows, columns, dataTable: [columns, ...rows] };
};
