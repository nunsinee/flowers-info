import { useEffect, useState } from "react";
import RemoveFavourites from "../favourites/RemoveFavourites";
import FlowerCard from "../flowers/FlowerCard"; //22
import NoFavItems from "../common/NoFavItems";
import { getExitingFavs, saveFavs } from "../../utils/favFunctions";

const FavouritesList = (props) => {
	const [favourites, setFavourites] = useState(getExitingFavs);

	useEffect(() => {
		let favList = JSON.parse(localStorage.getItem("flowFavs"));

		if (favList) {
			setFavourites(favList);
		}
	}, [setFavourites]);

	const RemoveFavFlower = (flower) => {
		const newFavFlowerList = favourites.filter((f) => f.id !== flower.id);
		setFavourites(newFavFlowerList);
		saveFavs(newFavFlowerList);
		getExitingFavs(newFavFlowerList);
	};

	if (favourites.length === 0) {
		return <NoFavItems>You have No Favorites Item!!</NoFavItems>;
	}

	return (
		<>
			<FlowerCard
				flowers={favourites}
				handleFavClick={RemoveFavFlower}
				favComponent={RemoveFavourites}
			/>
		</>
	);
};

export default FavouritesList;
