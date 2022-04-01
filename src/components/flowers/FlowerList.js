import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { API_URL } from "../../constants/api";
import Loader from "../layout/Loader";
import ErrorMessage from "../common/ErrorMessage";
import FlowerCard from "./FlowerCard";
import AddFavourites from "../favourites/AddFavourites";

export default function FlowersList() {
	const [flowers, setFlowers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [favourites, setFavourites] = useState([]);

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

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage message={`Error:${error}`} />;
	}

	const saveToLocalStorage = (item) => {
		localStorage.setItem("flowFav", JSON.stringify(item));
	};

	const AddFavFlower = (flower) => {
		const newFavFlowerCard = [...favourites, flower];
		setFavourites(newFavFlowerCard);
		saveToLocalStorage(newFavFlowerCard);
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
