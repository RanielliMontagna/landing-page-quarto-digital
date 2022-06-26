import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'routes';

import { SnackbarProvider } from 'notistack';
import { GlobalStyles, Theme } from 'themes';

import { AppProvider, store } from 'store';

import Aos from 'aos';
import 'aos/dist/aos.css';

export const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <AppProvider>
          <Theme>
            <GlobalStyles />
            <Router />
          </Theme>
        </AppProvider>
      </SnackbarProvider>
    </Provider>
  );
};
