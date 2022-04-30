import React, { useState, useContext } from "react";

//import { UserContext } from "../../pages/index";
import { UserContext } from "../../contexts/UserContext";
export default function NewUser() {
	// const values = useContext(UserContext);
	// const { users, updateUsers } = values;
	const { users, updateUsers } = useContext(UserContext);
	const [newUser, setNewUser] = useState({
		userId: "",
		name: "",
		title: ""
	});

	const handleChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const addNewUser = (e) => {
		e.preventDefault();
		updateUsers([...users, newUser]);
		Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
		setNewUser({});
	};

	return (
		<>
			<form action="" onSubmit={addNewUser}>
				<input
					type="text"
					name="userId"
					placeholder="Id"
					value={newUser.userId}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={newUser.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="title"
					placeholder="title"
					value={newUser.title}
					onChange={handleChange}
				/>

				<button>Submit</button>
			</form>
		</>
	);
}
