import { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RemoveFavourites from "../favourites/RemoveFavourites";
import NoFavItems from "../common/NoFavItems";
import { getExitingFavs, saveFavs } from "../../utils/favFunctions";

const FavouritesList = (props) => {
	const [favourites, setFavourites] = useState(getExitingFavs);

	useEffect(() => {
		let favList = JSON.parse(localStorage.getItem("flowFavs"));

		if (favList) {
			setFavourites(favList);
		}
	}, [setFavourites]);

	// const RemoveFavFlower = (id) => {
	// 	let newFavoriteList = favourites.filter((fav) => fav.id !== id);
	// 	setFavourites(newFavoriteList);
	// 	saveFavs(newFavoriteList);
	// };

	const RemoveFavFlower = (flower) => {
		const newFavFlowerList = favourites.filter((f) => f.id !== flower.id);
		setFavourites(newFavFlowerList);
		saveFavs(newFavFlowerList);
	};

	if (favourites.length === 0) {
		return <NoFavItems>You have No Favorites Item!!</NoFavItems>;
	}

	return (
		<>
			{favourites.map((fav, index) => {
				return (
					<Col xs={12} md={6} lg={3} key={index}>
						<Card>
							<Link to={`/detail/${fav.id}`}>
								<Card.Img
									variant="top"
									src={fav.featured_media_src_url}
								/>
							</Link>
							<Card.Body>
								<div className="card-menu">
									<Link to={`/detail/${fav.id}`}>
										<Card.Title>
											{fav.title.rendered}
										</Card.Title>
									</Link>

									<div
										variant="outline-warning"
										onClick={() => RemoveFavFlower(fav.id)}
										type="button"
									>
										<RemoveFavourites />
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</>
	);
};

export default FavouritesList;
