import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

it('Should render the whole application', async () => {
  render(<App />);
  // const linkElement = screen.getByText('Task:');
  // expect(linkElement).toBeInTheDocument();
});
