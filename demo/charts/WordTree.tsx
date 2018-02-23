import * as React from "react";
import { ChartRenderer } from "../../src/Chart";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/wordtree
export const WordTree = () => {
  return (
    <ChartRenderer
      type="WordTree"
      onReady={(chartWrapper, dataTable, arrayToDataTable) => {
        var data = arrayToDataTable(
          [
            ["Phrases"],
            ["cats are better than dogs"],
            ["cats eat kibble"],
            ["cats are better than hamsters"],
            ["cats are awesome"],
            ["cats are people too"],
            ["cats eat mice"],
            ["cats meowing"],
            ["cats in the cradle"],
            ["cats eat mice"],
            ["cats in the cradle lyrics"],
            ["cats eat kibble"],
            ["cats for adoption"],
            ["cats are family"],
            ["cats eat mice"],
            ["cats are better than kittens"],
            ["cats are evil"],
            ["cats are weird"],
            ["cats eat mice"]
          ],
          true // Treat first row as data as well.
        );
        chartWrapper.setDataTable(data);

        chartWrapper.setOptions({
          wordtree: {
            format: "implicit",
            word: "cats"
          }
        });
      }}
    />
  );
};
