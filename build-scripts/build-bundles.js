const rollup = require("rollup");

const bundleName = "ReactGoogleCharts";
const bundles = ["umd", "es", "amd", "cjs", "iife", "system"];

const getInputOptions = bundleFormat => {
  return {
    inputOptions: {
      input: "build/index.js"
    },
    outputOptions: {
      format: bundleFormat,
      file: `dist/index.${bundleFormat}.js`,
      name: bundleName
    }
  };
};

const inputOptions = {
  input: "build/index.js"
};
const outputOptions = {
  format: "umd",
  file: "dist/index.umd.js",
  name: "ReactGoogleCharts"
};

const build = async () => {
  for (let bundleFormat of bundles) {
    const { inputOptions, outputOptions } = getInputOptions(bundleFormat);
    const bundle = await rollup.rollup(inputOptions);

    // generate code and a sourcemap
    const { code, map } = await bundle.generate(outputOptions);

    // or write the bundle to disk
    await bundle.write(outputOptions);
  }
  // create a bundle
};
build();
