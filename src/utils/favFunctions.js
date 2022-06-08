export function getExitingFavs() {
	const favs = localStorage.getItem("flowFavs");

	if (favs === null) {
		return [];
	} else {
		return JSON.parse(favs);
	}
}

export function saveFavs(favs) {
	localStorage.setItem("flowFavs", JSON.stringify(favs));
}
