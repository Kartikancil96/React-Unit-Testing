import React from 'react';
import { render } from '@testing-library/react';
import useCheckLogin  from './UseCheckLogin'; // Adjust the import path as needed

// Mock the react-router-dom's useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('useCheckLogin', () => {
  it('should navigate to the home page when token is null', () => {
    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(navigateMock);

    const { unmount } = render(<ComponentWithCheckLogin token={null} />); // Replace ComponentWithCheckLogin with your actual component

    expect(navigateMock).toHaveBeenCalledWith('/');
    unmount();
  });

  it('should not navigate when token is not null', () => {
    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(navigateMock);

    const { unmount } = render(<ComponentWithCheckLogin token="some-token" />); // Replace ComponentWithCheckLogin with your actual component

    expect(navigateMock).not.toHaveBeenCalled();
    unmount();
  });
});
