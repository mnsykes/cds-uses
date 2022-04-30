import React from "react";
import Link from "next/link";

import cardStyles from "./dev-cards.module.css";

export default function DevCard({ dev }) {
	return (
		<Link href="/uses-pages/uses">
			<a className={cardStyles.card}>
				<h3>{dev.name}</h3>
				<p>{dev.title}</p>
			</a>
		</Link>
	);
}
