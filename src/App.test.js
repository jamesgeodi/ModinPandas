// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModinPandas title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModinPandas/i);
    expect(titleElement).toBeInTheDocument();
});
