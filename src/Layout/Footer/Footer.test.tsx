import { render } from '@testing-library/react';
import Footer from '.';

describe('AppFooter Component', () => {
  it('should render the footer with the correct text', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/© 2023 Copyright: Kartika Nurkhaidah/i);
    expect(copyrightText).toBeDefined();
  });

  // Add more test cases as needed
});
