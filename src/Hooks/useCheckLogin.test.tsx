import { renderHook } from '@testing-library/react';
import { useCheckLogin } from '.';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

jest.mock('react-router-dom');

describe('useCheckLogin', () => {
  it('should navigate to "/" if token is null', () => {
    const navigateMock = useNavigate as jest.Mock;

    const { result } = renderHook(() => useCheckLogin(null));

    // The effect should have been called
    expect(result.current).toBeUndefined();

    // Check if navigate function is called with '/'
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('should not navigate if token is not null', () => {
    const navigateMock = useNavigate as jest.Mock;

    const { result } = renderHook(() => useCheckLogin('exampleToken'));

    // The effect should have been called
    expect(result.current).toBeUndefined();

    // Navigate function should not be called
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
