import Link from "next/link";

// our-domain.com/aboutus
const AboutUs = () => {
	const details = [
		{ id: 1, name: "Yash", role: "Senior Developer" },
		{ id: 2, name: "Vaibhav", role: "Backend Developer" },
		{ id: 3, name: "Suresh", role: "Frontend Developer" },
	];
	return (
		<div>
			<h1>About Us Page</h1>
			<h2>List of Developers</h2>
			<ul>
				{details.map((dev) => (
					<li key={dev.id}>
						<Link href={`/aboutus/${dev.id}`}>{dev.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AboutUs;
