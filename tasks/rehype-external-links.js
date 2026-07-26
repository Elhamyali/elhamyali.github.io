export default function externalLinks() {
	return (tree) => {
		visit(tree);
	};
}

function visit(node) {
	if (
		node.type === "element" &&
		node.tagName === "a" &&
		typeof node.properties?.href === "string" &&
		/^https?:\/\//.test(node.properties.href)
	) {
		node.properties.target = "_blank";
		node.properties.rel = ["noreferrer"];
	}

	for (const child of node.children || []) visit(child);
}
