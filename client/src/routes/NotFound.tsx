// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import Container from '../components/Container';
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';

// Config imports
import {pageTitlePrefix} from '../config.js';

function NotFound() {
	const name = '404';
	const pageTitle = pageTitlePrefix + name;
	return (
		<Container>
			{/* Page title */}
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			{/* Page content */}
			<Content>
				<ContentRow>
					<h1>Oh no...</h1>
				</ContentRow>
				<ContentRow>
					<h2>The page you are looking for doesn&apos;t exist!</h2>
				</ContentRow>
				<ContentRow>
					<p><i>Finger weg, Clemens!</i></p>
				</ContentRow>
			</Content>
		</Container>
	);
}

export default NotFound;
