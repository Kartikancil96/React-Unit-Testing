import { waitFor, fireEvent, render, screen } from "@testing-library/react";
import Login from ".";

describe('test login form', () => {
    const mockProps = jest.fn();
    test('title render correctly', async () => {
        render(<Login onSubmit={mockProps} />)
        const title = screen.getByText('Login')
        expect(title).toBeDefined();
    })

    test('label email render correctly', async () => {
        render(<Login onSubmit={mockProps} />)
        const title = screen.getByText('Email Address')
        expect(title).toBeDefined();
    })

    test('label password render correctly', async () => {
        render(<Login onSubmit={mockProps} />);
        const title = screen.getByText('Password')
        expect(title).toBeDefined();
    })

    test('button submit render correctly', async () => {
        render(<Login onSubmit={mockProps} />)
        const title = screen.getByText('Log in')
        expect(title).toBeDefined();
    })

    test('onSubmit work correctly', async () => {
        const { getByPlaceholderText, getByText } = render(<Login onSubmit={mockProps} />);
        const emailInput = getByPlaceholderText('ex@ample.com') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const submitButton = getByText('Log in');

        fireEvent.change(emailInput, {target: { value: 'siapa@dimana.com' }});
        fireEvent.change(passwordInput, { target: { value: '12345678' } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockProps).toHaveBeenCalledTimes(1);
            expect(mockProps).toHaveBeenCalledWith({
                email: 'siapa@dimana.com',
                password: '12345678',
            });
        });
    });

})