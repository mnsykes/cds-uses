import React, { createContext, useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

import UsesForm from "../../components/uses-form/UsesForm";

import Layout from "../../components/Layout";
import CardLayout from "../components/dev-uses-cards/cards-layout/CardLayout";
import NewUser from "../components/new-user/NewUser";

import { UserProvider } from "../contexts/UserContext";

export default function Uses() {
	return (
		<Layout>
			<h1>CDS Uses</h1>
			{/* get initial values for provider from useState and wrap components that need context in UserContext tag */}
			<UserProvider>
				<NewUser />
				<CardLayout />
			</UserProvider>
			<UsesForm />
		</Layout>
	);
}
