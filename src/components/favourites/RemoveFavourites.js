import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

const RemoveFavourites = (flowers, event) => {
	const [isAdd, setIsAdd] = useState(false);

	const handleClick = (event) => {
		setIsAdd((current) => !current);
	};

	return (
		<BsHeartFill
			className={isAdd ? "removeFav" : "addFav"}
			size="22px"
			onClick={handleClick}
		/>
	);
};

export default RemoveFavourites;
