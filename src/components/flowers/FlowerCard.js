import { Col, Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const FlowerCard = (props) => {
	const FavouriteComponent = props.favComponent;

	return (
		<>
			{props.flowers.map((flower, index) => (
				<Col xs={12} md={4} key={flower.id}>
					<Card>
						<Link to={`/detail/${flower.id}`}>
							<Card.Img
								variant="top"
								src={flower.featured_media_src_url}
								alt={flower.title.rendered}
							/>
						</Link>
						<Card.Body>
							<div className="card-menu">
								<Link to={`/detail/${flower.id}`}>
									<Card.Title>
										{flower.title.rendered}
									</Card.Title>
								</Link>

								<div
									variant="outline-warning"
									onClick={() => props.handleFavClick(flower)}
									type="button"
									className="textBtn"
								>
									<FavouriteComponent />
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			))}
		</>
	);
};

export default FlowerCard;
