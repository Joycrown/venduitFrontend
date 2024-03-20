
/// <reference types="@testing-library/jest-dom" />
import { render } from '@testing-library/react';
import App from './App'; // assuming App is your main component

test('renders without crashing', () => {
  render(<App />);
});