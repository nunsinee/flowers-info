import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import { Container } from "react-bootstrap";
import FlowerList from "../flowers/FlowerList";

export default function HomePage() {
	return (
		<>
			<Container>
				<Heading title="Home" />
				<hr />
				<SubHeading subTitle="Flowers Lists" />
				<FlowerList />
			</Container>
		</>
	);
}
