import { Theme, GlobalStyles } from 'themes';
import { Router } from 'routes';
import { Provider } from 'react-redux';
import { AppProvider, store } from 'store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Theme>
          <GlobalStyles />
          <Router />
        </Theme>
      </AppProvider>
    </Provider>
  );
};
