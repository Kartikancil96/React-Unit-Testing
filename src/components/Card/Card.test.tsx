import { render } from '@testing-library/react';
import Card from '.';

describe('Card Component', () => {
  it('renders without errors', () => {
    // Render the Card component
    const { container } = render(<Card>Test Content</Card>);

    // Check if the component rendered successfully
    expect(container).toBeDefined();
  });

});
