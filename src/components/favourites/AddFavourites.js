import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

const AddFavourites = (flowers, event) => {
	const [isAdd, setIsAdd] = useState(false);

	const handleClick = (event) => {
		setIsAdd((current) => !current);
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
