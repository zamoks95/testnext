import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
