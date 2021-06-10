import { QueryClientProvider, QueryClient } from 'react-query';
import SnackbarProvider from 'react-simple-snackbar';

import Layout from '../components/Layout';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
