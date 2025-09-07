import Layout from '../components/Layout';
import { AvatarCacheProvider } from '../components/AvatarCacheContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AvatarCacheProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AvatarCacheProvider>
  );
}
