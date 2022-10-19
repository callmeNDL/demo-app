import '../styles/globals.scss';
import '../styles/icons.scss';
import '../assets/scss/main.scss';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import AppLayout from '../layout/AppLayout';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  );
}

export default MyApp;
