import Heading from "../layout/Heading";
import { Container } from "react-bootstrap";
import Paragraph from "../layout/Paragraph";
import AuthContext from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
	const [auth] = useContext(AuthContext);

	let navigate = useNavigate();

	useEffect(() => {
		if (!auth) {
			navigate("/");
		} //eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
