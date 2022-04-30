import React from "react";

import formStyles from "./form-input.module.scss";

export default function FormInput({ label, ...otherProps }) {
	return (
		<div className={formStyles.group}>
			<input className={formStyles.formInput} {...otherProps} />
			{label && (
				<label
					className={`${formStyles.formInputLabel} ${otherProps.value.length ? "shrink" : ""}`}
				>
					{label}
				</label>
			)}
		</div>
	);
}
