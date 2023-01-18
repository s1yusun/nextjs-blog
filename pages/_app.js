// load global css to app

import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}