import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Button, Form, Alert, Row, Col } from "react-bootstrap";

import FormError from "../common/FormError";
import {
	MINIMUM_FIRST_NAME_CHARACTERS,
	MINIMUM_LAST_NAME_CHARACTERS,
	MINIMUM_MESSAGE,
	EMAIL_REGEX,
} from "../../constants/registration";

const schema = yup.object().shape({
	firstName: yup
		.string()
		.required("Please enter your name")
		.min(
			MINIMUM_FIRST_NAME_CHARACTERS,
			`Your First name must be at least ${MINIMUM_FIRST_NAME_CHARACTERS} characters`
		),
	lastName: yup
		.string()
		.min(
			MINIMUM_LAST_NAME_CHARACTERS,
			`Your Last name must be at least ${MINIMUM_LAST_NAME_CHARACTERS} characters`
		),
	email: yup
		.string("Please enter your website")
		.matches(EMAIL_REGEX, "Your email is not valid"),
	subject: yup.string().required("Please select your subject"),
	message: yup
		.string("Please enter your message here")
		.min(
			MINIMUM_MESSAGE,
			`Your message must be at least ${MINIMUM_MESSAGE} characters`
		),
});

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({ mode: "onChange", resolver: yupResolver(schema) });

	function onSubmit(data) {
		console.log(data);
		setSubmitted(true);
	}
	//console.log(errors);
	return (
		<>
			<Container>
				<Heading title="Contact Us" />
				<hr />

				<Row className="justify-content-md-center">
					<SubHeading subTitle="Contact Form" />
					<Col xs={12} md={8} lg={6}>
						{submitted && (
							<Alert variant="success">
								Your registration was successful
							</Alert>
						)}

						<Form onSubmit={handleSubmit(onSubmit)}>
							<Form.Group className="mb-3">
								<Form.Control
									className="form-control"
									placeholder="Firstname"
									{...register("firstName")}
								/>
								<Form.Text className="text-muted">
									Your name must be at least{" "}
									{MINIMUM_FIRST_NAME_CHARACTERS} characters.
									{errors.firstName && (
										<FormError>
											{errors.firstName.message}
										</FormError>
									)}
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Control
									className="form-control"
									placeholder="Lastname"
									{...register("lastName")}
								/>
								<Form.Text className="text-muted">
									Your name must be at least
									{MINIMUM_LAST_NAME_CHARACTERS} characters.
									{errors.lastName && (
										<FormError>
											{errors.lastName.message}
										</FormError>
									)}
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Control
									className="form-control"
									placeholder="Email"
									{...register("email")}
								/>
								<Form.Text className="text-muted">
									Please enter en valid email address
									{errors.email && (
										<FormError>
											{errors.email.message}
										</FormError>
									)}
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Select
									aria-label="Default select example"
									{...register("subject")}
									onChange={(e) =>
										setValue("subject", e.target.value, {
											shouldValidate: true,
										})
									}
								>
									<option value="">Select Subject</option>
									<option value="subject-one">
										Subject One
									</option>
									<option value="subject-two">
										Subject Two
									</option>
								</Form.Select>
								{errors.subject && (
									<FormError>
										{errors.subject.message}
									</FormError>
								)}
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Control
									as="textarea"
									aria-label="With textarea"
									className="form-control"
									placeholder="Message"
									{...register("message")}
								/>
								<Form.Text className="text-muted">
									Your message must be at least
									{MINIMUM_MESSAGE} characters
									{errors.message && (
										<FormError>
											{errors.message.message}
										</FormError>
									)}
								</Form.Text>
							</Form.Group>

							<Button variant="success" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}
