// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

// Describe the test suite
describe('App Component', () => {
  // Test the rendering of the component
  test('renders the NavBar and main content', () => {
    // Render the App component
    render(<App />);
    
    // Check if the NavBar component is rendered
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Check if the main heading is displayed
    expect(screen.getByText('Welcome to My Website!')).toBeInTheDocument();
    
    // Check if the subheading is displayed
    expect(screen.getByText('This is a simple React app with a top navbar.')).toBeInTheDocument();
  });
});
