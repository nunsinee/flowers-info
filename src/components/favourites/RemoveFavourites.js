import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { getExitingFavs } from "../../utils/favFunctions";

const RemoveFavourites = (flowers, event) => {
	const [isRemove, setIsRemove] = useState(false);

	const handleClick = (event, flower) => {
		let favs = getExitingFavs();

		const checkFavExist = favs.filter((fav) => fav.id !== flower.id);
		if (checkFavExist) {
			setIsRemove((current) => !current);
		} else {
			setIsRemove((current) => current);
		}
	};

	return (
		<BsHeartFill
			className={isRemove ? "addFav" : "removeFav"}
			size="22px"
			onClick={handleClick}
		/>
	);
};

export default RemoveFavourites;
