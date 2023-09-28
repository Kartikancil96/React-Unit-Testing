import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect.toHaveTextContent
import Navbar from '.'; // Adjust the import path as needed

// Mock the useNavigate hook outside of test cases
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigateSpy,
}));

describe('Navbar Component', () => {
  let navigateSpy; // Declare navigateSpy here

  beforeEach(() => {
    navigateSpy = jest.fn(); // Initialize navigateSpy before each test
  });

  it('renders without errors', () => {
    const { container } = render(<Navbar />);
    expect(container).toBeDefined();
  });

  it('displays navigation items correctly', () => {
    const { getByText } = render(<Navbar />);
    
    // Check for the existence of specific navigation items
    expect(getByText('Add Data')).toBeDefined();
    expect(getByText('Profile')).toBeDefined();
    expect(getByText('Log Out')).toBeDefined();
  });

  it('updates current selected key when a navigation item is clicked', () => {
    const { getByText } = render(<Navbar />);
    
    // Click on a navigation item
    fireEvent.click(getByText('Add Data'));
    
    // Check if the 'Add Data' item is selected
    expect(getByText('Add Data')).toBeCalledWith('ant-menu-item-selected');
    
    // You can repeat this for other navigation items as well
  });

  it('navigates to the correct route when a navigation item is clicked', () => {
    const { getByText } = render(<Navbar />);
    
    // Click on a navigation item
    fireEvent.click(getByText('Add Data'));

    // Check if the navigate function was called with the correct route
    expect(navigateSpy).toHaveBeenCalledWith('/add');
    
    // You can repeat this for other navigation items as well
  });

  it('logs out when the "Log Out" item is clicked', () => {
    const { getByText } = render(<Navbar />);
    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
    
    // Click on the "Log Out" item
    fireEvent.click(getByText('Log Out'));

    // Check if localStorage.removeItem was called with the correct argument
    expect(removeItemSpy).toHaveBeenCalledWith('token');
    
    // You can add additional checks or assertions based on your specific requirements
  });
});
