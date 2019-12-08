import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders todo app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/All todos are done! Take a rest!/i);
  expect(linkElement).toBeInTheDocument();
});
