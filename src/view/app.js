import breadView from "./bread.js";
import nodeView from "./node.js";

export default (target, state) => {
	const element = target.cloneNode(true);

	const bread = element.querySelector(".Breadcrumb");
	const node = element.querySelector(".Nodes");

	bread.replaceWith(breadView(bread, state));
	node.replaceWith(nodeView(node, state));

	return element;
};
