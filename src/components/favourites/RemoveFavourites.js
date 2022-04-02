import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const RemoveFavourites = () => {
	const [state, setState] = useState({
		color: "red",
	});
	const handleClick = (e) => {
		setState((state) => ({ ...state, color: "indianred" }));
	};

	return (
		<>
			<span>
				<TiDelete
					size="32px"
					style={{ color: state.color }}
					onClick={handleClick}
				/>
			</span>
		</>
	);
};

export default RemoveFavourites;
