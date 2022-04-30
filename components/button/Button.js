import React from "react";

const BUTTON_TYPE_CLASSES = {
	google: "googleSignIn",
	inverted: "inverted"
};

import btnStyles from "./button.module.scss";
export default function Button({ children, buttonType, ...otherProps }) {
	return (
		<button
			className={`${btnStyles.buttonContainer} ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
