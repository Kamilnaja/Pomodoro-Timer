import { render, screen } from '@testing-library/react';
import React from 'react';
import './main.scss';
import MainContainer from './MainContainer';

test('renders learn react link', () => {
  render(<MainContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
