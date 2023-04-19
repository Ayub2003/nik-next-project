import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { wrapper } from "@/redux/store/store";
import { FC } from "react";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const WithStore = (Props: any) => {
  const { store, props } = wrapper.useWrappedStore(Props);

  return (
    <Provider store={store}>
      <Props.Component {...props} />
    </Provider>
  );
};

export default WithStore;
