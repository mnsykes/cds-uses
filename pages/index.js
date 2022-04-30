import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import Authentication from "../components/authentication/Authentication";

import utilStyles from "../styles/utils.module.css";

//export const UserContext = createContext();

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<Authentication />
			</section>
		</Layout>
	);
}
