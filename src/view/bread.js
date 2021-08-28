export default (target, state) => {
	const element = target.cloneNode(true);
	const { paths } = state;

	element.innerHTML = "";
	element.innerHTML = paths
		.map((path) => {
			return `<div>${path}</div>`;
		})
		.join("");
	return element;
};
