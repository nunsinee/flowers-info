import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import { Container, Breadcrumb, Row } from "react-bootstrap";
import FavouritesList from "./FavouritesList";

export default function FavouritesPage() {
	return (
		<>
			<Container>
				<Heading title="Favourites" />
				<hr />
				<SubHeading subTitle="My Favourites Flowers" />
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item active>Favourites</Breadcrumb.Item>
				</Breadcrumb>
				<Row>
					<FavouritesList />
				</Row>
			</Container>
		</>
	);
}
