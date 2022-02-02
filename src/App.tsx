import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { Router } from 'routes';
import { AppProvider, store } from 'store';
import { GlobalStyles, Theme } from 'themes';

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
