import { createContext, useContext, useEffect, useState } from 'react';
import { readJSON } from '../utils/readRaw';
import { siteConfig } from '../utils/siteConfig';

const LinksContext = createContext({
	links: null,
	loading: true,
	error: null,
});

export function LinksProvider({ children }) {
	const [links, setLinks] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;

		readJSON(siteConfig.linksUrl)
			.then((loadedLinks) => {
				if (!isMounted) return;
				setLinks(loadedLinks || {});
				setError(null);
			})
			.catch((err) => {
				console.error('Failed to load links:', err);
				if (!isMounted) return;
				setError(err);
			})
			.finally(() => {
				if (isMounted) {
					setLoading(false);
				}
			});

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<LinksContext.Provider value={{ links, loading, error }}>
			{children}
		</LinksContext.Provider>
	);
}

export function useLinks() {
	return useContext(LinksContext);
}