import React, { useState } from "react";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import signInStyles from "./sign-in.module.scss";

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const signUpFormFields = {
	email: "",
	password: ""
};

export default function SignIn() {
	const [formFields, setFormFields] = useState(signUpFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(signUpFormFields);
	};

	// any call to a database is async
	const signInWithGoogle = async () => {
		// destructure user from response object
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	const handleChange = (e) => {
		// destructure name and value properties from event object
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(response);
			resetFormFields();
		} catch (error) {}
	};

	return (
		<div className={signInStyles.signInContainer}>
			<h2>Sign in with email and password</h2>
			<form onSubmit={handleSubmit}>
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
				<div className={signInStyles.btnContainer}>
					<Button type="submit" buttonType="google" onClick={signInWithGoogle}>
						GOOGLE SIGN IN
					</Button>
					<Button type="submit" onClick={handleSubmit}>
						SIGN IN
					</Button>
				</div>
			</form>
		</div>
	);
}
