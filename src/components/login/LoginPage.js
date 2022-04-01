import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../login/LoginForm";

export default function LoginPage() {
	return (
		<>
			<Container>
				<Heading title="Login" />
				<hr />
				<Row className="justify-content-md-center">
					<SubHeading subTitle="Login Form" />
					<Col xs={12} md={4}>
						<LoginForm />
					</Col>
				</Row>
			</Container>
		</>
	);
}
