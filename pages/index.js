// Client-side redirect to '/bio'. Keep '/home' serving the Home page.
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
	const router = useRouter();
	useEffect(() => {
		// Use replace so back button won't go back to this redirect page
		router.replace('/bio');
	}, [router]);
	return null;
}
