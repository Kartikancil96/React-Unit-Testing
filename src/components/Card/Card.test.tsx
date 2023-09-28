import React from 'react';
import { render } from '@testing-library/react';
import Card from '.';

describe('Card Component', () => {
  it('renders without errors', () => {
    // Render the Card component
    const { container } = render(<Card>Test Content</Card>);

    // Check if the component rendered successfully
    expect(container).toBeDefined();
  });

  it('renders the title if provided', () => {
    const title = 'Test Title';
    const { getByText } = render(<Card title={title}>Test Content</Card>);

    // Check if the title is rendered
    expect(getByText(title)).toBeDefined();
  });

  it('renders children content', () => {
    const content = 'Test Content';
    const { getByText } = render(<Card>{content}</Card>);

    // Check if the content is rendered
    expect(getByText(content)).toBeDefined();
  });
});
