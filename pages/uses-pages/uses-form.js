import React from "react";
import Layout from "../../components/layout";

import UsesForm from "../../components/uses-form/UsesForm";

import { UserProvider } from "../../contexts/UserContext";

export default function Form() {
	return (
		<Layout>
			<UserProvider>
				<UsesForm />
			</UserProvider>
		</Layout>
	);
}
