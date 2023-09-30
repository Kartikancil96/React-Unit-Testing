import { render } from '@testing-library/react';
import Text from '.';

describe('Text component', () => {
  it('renders a paragraph by default', () => {
    const { getByText } = render(<Text>Hello, World!</Text>);
    const paragraphElement = getByText('Hello, World!');
    expect(paragraphElement).toBeDefined();
    expect(paragraphElement.tagName).toBe('P');
  });

  it('renders an h1 element when type is h1', () => {
    const { getByText } = render(<Text type="h1">Hello, World!</Text>);
    const h1Element = getByText('Hello, World!');
    expect(h1Element).toBeDefined();
    expect(h1Element.tagName).toBe('H1');
  });

  it('renders an h2 element when type is h2', () => {
    const { getByText } = render(<Text type="h2">Hello, World!</Text>);
    const h2Element = getByText('Hello, World!');
    expect(h2Element).toBeDefined();
    expect(h2Element.tagName).toBe('H2');
  });

  it('renders an h3 element when type is h3', () => {
    const { getByText } = render(<Text type="h3">Hello, World!</Text>);
    const h3Element = getByText('Hello, World!');
    expect(h3Element).toBeDefined();
    expect(h3Element.tagName).toBe('H3');
  });

  it('renders a span element when type is span', () => {
    const { getByText } = render(<Text type="span">Hello, World!</Text>);
    const spanElement = getByText('Hello, World!');
    expect(spanElement).toBeDefined();
    expect(spanElement.tagName).toBe('SPAN');
  });

  it('renders a paragraph element with the "danger" class when type is danger', () => {
    const { getByText } = render(<Text type="danger">Hello, World!</Text>);
    const dangerElement = getByText('Hello, World!');
    expect(dangerElement).toBeDefined();
    expect(dangerElement.tagName).toBe('SPAN');
  });
});
