import Layout from '../components/Layout';
import { AvatarCacheProvider } from '../components/AvatarCacheContext';
import { LinksProvider } from '../components/LinksContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <LinksProvider>
      <AvatarCacheProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AvatarCacheProvider>
    </LinksProvider>
  );
}
