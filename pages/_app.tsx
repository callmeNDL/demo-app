import '../styles/globals.scss';
import '../styles/icons.scss';

import '../assets/scss/Header.scss';
import '../assets/scss/Sider.scss';
import '../assets/scss/CreateUser.scss';

import '../assets/scss/pages/PageCreateUser.scss';
import '../assets/scss/form/FormCreateUser.scss';

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
