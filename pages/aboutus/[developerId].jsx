import { useRouter } from "next/router";
import React from "react";

const Developer = () => {
	const router = useRouter();
	const { developerId } = router.query;

	// Check if the router is ready to avoid `undefined` developerId
	if (!router.isReady) {
		return <div>Loading...</div>;
	}

	const details = [
		{ id: 1, name: "Yash", role: "Senior Developer" },
		{ id: 2, name: "Vaibhav", role: "Backend Developer" },
		{ id: 3, name: "Suresh", role: "Frontend Developer" },
	];

	const developer = details.find((dev) => dev.id === Number(developerId));

	if (!developer) {
		return (
			<div>
				<h1>Developer Not Found</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Developer</h1>
			<h2>About Developer</h2>
			<div>
				<p>Id: {developer.id}</p>
				<p>Name: {developer.name}</p>
				<p>Role: {developer.role}</p>
			</div>
		</div>
	);
};

export default Developer;
