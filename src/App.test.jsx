import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import App from './App';

test('renders the homepage without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
});
