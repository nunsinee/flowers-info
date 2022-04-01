import Heading from "../layout/Heading";
import { Container } from "react-bootstrap";
import Paragraph from "../layout/Paragraph";

export default function AdminPage() {
	return (
		<>
			<Container>
				<Heading title="Admin" />
				<hr />
				<Paragraph>
					This page will simply display an "Admin" heading
				</Paragraph>
			</Container>
		</>
	);
}
