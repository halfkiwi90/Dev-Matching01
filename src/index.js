import someData from "./getData.js";
import view from "./view/app.js";

const state = {
	datas: someData,
	paths: ["root"],
};

window.requestAnimationFrame(() => {
	const main = document.querySelector(".App");
	const newMain = view(main, state);

	main.replaceWith(newMain);
});
