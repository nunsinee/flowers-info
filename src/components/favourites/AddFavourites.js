import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { getExitingFavs } from "../../utils/favFunctions";

const AddFavourites = () => {
	const [isAdd, setIsAdd] = useState(false);

	const handleClick = (flower) => {
		let favs = getExitingFavs();
		setIsAdd((current) => !current);

		const checkFavExist = favs.find((fav) => fav.id === flower.id);
		if (checkFavExist) {
			setIsAdd((current) => !current);
		} else {
			setIsAdd((current) => current);
		}
	};

	return (
		<BsHeartFill
			className={isAdd ? "addFav" : "removeFav"}
			size="22px"
			onClick={handleClick}
		/>
	);
};

export default AddFavourites;
