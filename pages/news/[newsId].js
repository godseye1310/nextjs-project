// our-domain.com/news/news-details

import { useRouter } from "next/router";

const NewsDetailsPage = () => {
	const router = useRouter();
	const { newsId } = router.query;
	console.log(newsId);

	// send a request to the backend API
	// to fetch the news item with newsId

	return (
		<div>
			<h1>The News Details Page</h1>
		</div>
	);
};

export default NewsDetailsPage;

// [newsId].js for dynamic routing
