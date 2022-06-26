import { Provider } from 'react-redux';
import { Router } from 'routes';

import { SnackbarProvider } from 'notistack';
import { GlobalStyles, Theme } from 'themes';

import { AppProvider, store } from 'store';

export const App = () => {
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
