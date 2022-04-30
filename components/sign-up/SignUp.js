import React, { useState } from "react";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import signUpStyles from "./sign-up.module.scss";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const signUpFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: ""
};

export default function SignUp() {
	const [formFields, setFormFields] = useState(signUpFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(signUpFormFields);
	};

	const handleChange = (e) => {
		// destructure name and value properties from event object
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// passwords match
		if (!password === confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			// destructure user from response object
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") alert("Email already in use");
		}
	};

	return (
		<div className={signUpStyles.signUpContainer}>
			<h2>Sign up with Email and Password</h2>
			<form onSubmit={() => null}>
				<FormInput
					label="Display Name"
					type="text"
					name="displayName"
					onChange={handleChange}
					value={displayName}
					required
				/>
				<FormInput
					label="Email"
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
					required
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					onChange={handleChange}
					value={password}
					required
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					onChange={handleChange}
					value={confirmPassword}
					required
				/>
				<Button type="submit" onClick={handleSubmit}>
					Create Account
				</Button>
			</form>
		</div>
	);
}
