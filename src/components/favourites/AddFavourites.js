import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";

const AddFavourites = () => {
	const [state, setState] = useState({
		color: "indianred",
	});
	const handleClick = (e) => {
		setState((state) => ({ ...state, color: "red" }));
	};

	return (
		<>
			<span>
				<MdFavorite
					size="32px"
					style={{ color: state.color }}
					onClick={handleClick}
				/>
			</span>
		</>
	);
};

export default AddFavourites;
