module.exports = {
	js: [{
		source: "./index.jsx",
		target: "./dist/index.js",
		jsx: true,
		esnext: true,
		nodeEnv: process.node.NODE_ENV || "development"
	}]
};
