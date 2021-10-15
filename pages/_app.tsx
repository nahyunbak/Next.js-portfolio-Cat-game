import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilValue } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
