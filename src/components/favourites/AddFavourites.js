import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

const AddFavourites = () => {
	const [state, setState] = useState({
		color: "indianred",
	});
	const handleClick = (e) => {
		setState((state) => ({ ...state, color: "red" }));
	};

	return (
		<>
			<span className="changeColor">
				<BsHeartFill
					size="22px"
					style={{ color: state.color }}
					onClick={handleClick}
				/>
			</span>
		</>
	);
};

export default AddFavourites;

// import React, { useState } from "react";
// import { BsHeartFill } from "react-icons/bs";

// const AddFavourites = () => {
// 	const [isFav, setIsFav] = useState(false);

// 	return (
// 		<>
// 			<BsHeartFill
// 				size="22px"
// 				style={{ color: "indianred" }}
// 				onClick={() => setIsFav(!isFav)}
// 			/>
// 			{isFav
// 				? ({{ color: "indianred" }})
// 				: (style = {{ color: "indianred" }})}
// 		</>
// 	);
// };

// export default AddFavourites;
