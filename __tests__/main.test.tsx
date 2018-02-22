import * as React from "react";
import * as Renderer from "react-test-renderer";
import { Sum } from "../src/main";

describe("Sum", () => {
  test("Renders", () => {
    const tree = Renderer.create(<Sum a={1} b={2} />);
    expect(tree).toMatchSnapshot();
  });
});
