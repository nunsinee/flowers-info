import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

const RemoveFavourites = () => {
	const [state, setState] = useState({
		color: "red",
	});
	const handleClick = (e) => {
		setState((state) => ({ ...state, color: "indianred" }));
	};

	return (
		<>
			<BsHeartFill
				size="22px"
				style={{ color: state.color }}
				onClick={handleClick}
			/>
		</>
	);
};

export default RemoveFavourites;
