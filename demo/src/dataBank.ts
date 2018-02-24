export const dataBank = () => {
  return {
    options: {
      width: 900,
      height: 400,
      title: "Chart Title"
    },
    points: {
      attentionSpanOverTime: [
        { x: "2015", y: 30, label: "AttentionSpan", type: "number" },
        { x: "2016", y: 20, label: "AttentionSpan", type: "number" },
        { x: "2017", y: 10, label: "AttentionSpan", type: "number" },
        { x: "2018", y: 5, label: "AttentionSpan", type: "number" },
        { x: "2019", y: 1, label: "AttentionSpan", type: "number" }
      ]
    }
  };
};
