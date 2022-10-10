import '../styles/globals.scss';
import '../assets/scss/Header.scss';
import '../assets/scss/Sider.scss'
import '../assets/scss/CreateUser.scss'

import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import AppLayout from '../layout/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
