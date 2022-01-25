import { Theme, GlobalStyles } from 'themes';
import { Router } from 'routes';
import { Provider } from 'react-redux';
import { store } from 'store';

export const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <Router />
      </Theme>
    </Provider>
  );
};
