import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import { Form, Button } from "react-bootstrap";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [auth, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			navigate("/admin");
		} catch (error) {
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <FormError>{loginError}</FormError>}
				<fieldset disabled={submitting}>
					<Form.Group className="mb-3">
						<Form.Label>Username:</Form.Label>
						<Form.Control
							name="username"
							placeholder="Username"
							{...register("username", { required: true })}
						/>
						{errors.username && (
							<FormError>{errors.username.message}</FormError>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Password:</Form.Label>
						<Form.Control
							type="password"
							name="password"
							placeholder="Password"
							{...register("password", { required: true })}
						/>
						{errors.password && (
							<FormError>{errors.password.message}</FormError>
						)}
					</Form.Group>
					<Button variant="primary" type="submit">
						{submitting ? "Login in..." : "Login"}
					</Button>
				</fieldset>
			</Form>
		</>
	);
}
