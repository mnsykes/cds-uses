import React from "react";

import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";

import authStyles from "./authentication.module.scss";

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import Button from "../button/Button";

export default function Authentication() {
	return (
		<div className={authStyles.authContainer}>
			<SignIn />
			<SignUp />
		</div>
	);
}
