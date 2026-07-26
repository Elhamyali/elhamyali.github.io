import StyleDictionary from "style-dictionary";

const cwd = process.cwd();

new StyleDictionary({
	source: [`${cwd}/properties/**/*.json`],
	platforms: {
		css: {
			transformGroup: "css",
			buildPath: `${cwd}/src/styles/`,
			files: [{ format: "css/variables", destination: "variables.css" }]
		},
		json: {
			buildPath: `${cwd}/src/data/`,
			files: [{ format: "json/nested", destination: "variables.json" }]
		}
	}
}).buildAllPlatforms();
