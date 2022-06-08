import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { API_URL } from "../../constants/api";
import Loader from "../layout/Loader";
import ErrorMessage from "../common/ErrorMessage";
import FlowerCard from "./FlowerCard";
import AddFavourites from "../favourites/AddFavourites";
import { getExitingFavs, saveFavs } from "../../utils/favFunctions";

export default function FlowersList() {
	const [flowers, setFlowers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(API_URL);
				if (response.ok) {
					const json = await response.json();
					setFlowers(json);
				} else {
					setError("An error occurred");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const flowerFavs = getExitingFavs();
		saveFavs(flowerFavs);
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage message={`Error:${error}`} />;
	}

	const AddFavFlower = (flower, event) => {
		const currentFavs = getExitingFavs();

		const existFavs = currentFavs.find(function (fav) {
			return fav.id === flower.id;
		});

		if (existFavs === undefined) {
			currentFavs.push(flower);
			saveFavs(currentFavs);
		} else {
			const newFavs = currentFavs.filter((fav) => fav.id !== flower.id);
			saveFavs(newFavs);
			getExitingFavs(newFavs);
		}
	};

	return (
		<>
			<Row>
				<FlowerCard
					flowers={flowers}
					handleFavClick={AddFavFlower}
					favComponent={AddFavourites}
				/>
			</Row>
		</>
	);
}
