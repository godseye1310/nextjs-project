import Link from "next/link";

// our-domain.com/news
const NewsPage = () => {
	return (
		<div>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href="/news/next-js-react-framework">
						NextJS - A React Framework
					</Link>
				</li>
				<li>
					<Link href="/news/greatness-of-next-js">
						Greatness of NextJS
					</Link>
				</li>
				<li>
					<Link href="/news/learn-next-js">Learn NextJS</Link>
				</li>
			</ul>
		</div>
	);
};

export default NewsPage;
