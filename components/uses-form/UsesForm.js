import React, { useState, useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

export default function UsesForm() {
	const { users, updateUsers } = useContext(UserContext);
	console.log(users);
	const [developer, setDeveloper] = useState({
		setupImg: "",
		name: "",
		computer: "",
		ide: "",
		ext: ""
	});

	const handleChange = (e) => {
		setDeveloper({ ...developer, [e.target.name]: e.target.value });
	};

	const showInput = (e) => {
		e.preventDefault();
		updateUsers([...users, developer]);
		Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
		setDeveloper({});
	};

	return (
		<>
			<form action="" onSubmit={showInput}>
				<input
					type="file"
					name="setupImg"
					placeholder="Office setup image"
					value={developer.setupImg}
					onChange={handleChange}
					accept="image/*"
				/>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={developer.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="computer"
					placeholder="Computer"
					value={developer.computer}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ide"
					placeholder="Text Editor"
					value={developer.ide}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ext"
					placeholder="Favorite extension"
					value={developer.ext}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</>
	);
}
