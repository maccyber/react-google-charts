const SUPPORTED_CHARTS = [
  "AnnotationChart",
  "AreaChart",
  "BarChart",
  "BubbleChart",
  "Calendar",
  "CandlestickChart",
  "ColumnChart",
  "DonutChart",
  "GanttChart",
  "GaugeChart",
  "GeoChart",
  "Histogram",
  "LineChart",
  "OrgChart",
  "PieChart",
  "Sankey",
  "ScatterChart",
  "SteppedAreaChart",
  "TableChart",
  "TreeMap",
  "WaterfallChart",
  "WordTree"
];
describe("chart tests", function() {
  SUPPORTED_CHARTS.forEach(chartName => {
    it(chartName, function() {
      cy.visit("http://localhost:1234");
      cy.get(".card-content").should("have.length", 0);
      cy.contains(chartName).click();
      cy.url().should("include", `/${chartName}`);
      cy.get(".card-header").contains(chartName);
      cy.get(".card-content").should("have.length", 1);
      // cy.get(".card-content").contains("Loading");
      cy.wait(1000);
      cy
        .get(".card-content")
        .contains("Loading")
        .should("have.length", 0);

      cy
        .get(".card-content")
        .children()
        .should("have.length", 1);
    });
  });
});
