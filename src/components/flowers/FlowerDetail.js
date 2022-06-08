import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/api";
import Loader from "../layout/Loader";
import ErrorMessage from "../common/ErrorMessage";
import Heading from "../layout/Heading";
import SubHeadings from "../layout/SubHeading";

import {
	Container,
	Card,
	ListGroup,
	ListGroupItem,
	Row,
	Col,
	Breadcrumb,
} from "react-bootstrap";

export default function FlowerDetail() {
	const [flower, setFlower] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let navigate = useNavigate();
	let { id } = useParams();

	if (!id) {
		navigate.push("/");
	}

	const url = API_URL + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);
					if (response.ok) {
						const json = await response.json();
						console.log(json);
						setFlower(json);
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
		},
		[url]
	);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage message={`Error:${error}`} />;
	}

	return (
		<>
			<Container key={flower.id}>
				<Heading title={flower.name} />
				<hr />
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item active>
						{flower.title.rendered}
					</Breadcrumb.Item>
				</Breadcrumb>
				<Row className="justify-content-md-center">
					<Col xs={12} md={8} lg={6}>
						<Card className="grid-card-detail">
							<Card.Body>
								<Card.Title>
									<SubHeadings
										subTitle={flower.title.rendered}
									/>
								</Card.Title>
							</Card.Body>
							<Card.Img
								variant="top"
								src={flower.featured_media_src_url}
								alt={flower.title.rendered}
								className="card-img-top__image-detail"
							/>
							<ListGroup className="list-group-flush">
								<ListGroupItem>
									{flower.excerpt.rendered}
								</ListGroupItem>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
