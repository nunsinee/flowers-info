import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
// import { getExitingFavs } from "../../utils/favFunctions";

const RemoveFavourites = () => {
	const [isRemove, setIsRemove] = useState(false);

	const handleClick = () => {
		setIsRemove((current) => !current);
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
