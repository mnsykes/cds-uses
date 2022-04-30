import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	// set the initial state of the devs array
	const [users, updateUsers] = useState([]);
	const value = { users, updateUsers };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
