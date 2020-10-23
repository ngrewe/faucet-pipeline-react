module.exports = {
	essugar: [{
		source: "./index.jsx",
		target: "./dist/index.js",
    env: process.env.NODE_ENV,
		jsx: true,
	}],
  plugins: [require("faucet-pipeline-essugar")]
};
