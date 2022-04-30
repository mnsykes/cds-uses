import React, { useContext } from "react";

//import { UserContext } from "../../../pages/index";
import { UserContext } from "../../../contexts/UserContext";

import DevCard from "../dev-cards/DevCard";

import gridStyles from "./cards-layout.module.css";

export default function CardLayout() {
	const { users, updateUsers } = useContext(UserContext);
	//const { userId } = users;
	return (
		<div className={gridStyles.grid}>
			{users.map((user, index) => (
				<DevCard key={index} dev={user} />
			))}
		</div>
	);
}
