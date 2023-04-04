import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { wrapper } from "@/redux/store/store";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
