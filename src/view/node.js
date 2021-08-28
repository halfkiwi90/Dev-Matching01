const createNode = (data) => {
	return `<div class="Node">
    <img src=${
			data.type === "FILE" ? "./assets/file.png" : "./assets/directory.png"
		}>
    <div>${data.name}</div>
  </div>`;
};

export default (target, state) => {
	const element = target.cloneNode(true);
	const { datas, paths } = state;

	element.innerHTML = "";
	if (paths.length > 1)
		element.innerHTML = `<div class="Node">
  <img src="./assets/prev.png">
  </div>`;
	element.innerHTML += datas.map(createNode).join("");

	return element;
};
