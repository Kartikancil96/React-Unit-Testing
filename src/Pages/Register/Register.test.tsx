import { waitFor, fireEvent, render, screen } from "@testing-library/react";
import Register from ".";

describe('test register form', () => {
    const mockProps = jest.fn();
    test('title render correctly', async () => {
        render(<Register onSubmit={mockProps} />)
        const title = screen.getByText('Register Account')
        expect(title).toBeDefined();
    })

    test('label name render correctly', async () => {
        render(<Register onSubmit={mockProps} />)
        const title = screen.getByText('Name')
        expect(title).toBeDefined();
    })

    test('label email render correctly', async () => {
        render(<Register onSubmit={mockProps} />)
        const title = screen.getByText('Email Address')
        expect(title).toBeDefined();
    })

    test('label password render correctly', async () => {
        render(<Register onSubmit={mockProps} />);
        const title = screen.getByText('Password')
        expect(title).toBeDefined();
    })

    test('button submit render correctly', async () => {
        render(<Register onSubmit={mockProps} />)
        const title = screen.getByText('Sign Up')
        expect(title).toBeDefined();
    })
    test('button submit render correctly', async () => {
        render(<Register onSubmit={mockProps} />)
        const title = screen.getByText('Sign Up')
        expect(title).toBeDefined();
    })

    test('button submit render correctly', async () => {
        render(<Register onSubmit={mockProps} />)
        const title = screen.getByText('Back')
        expect(title).toBeDefined();
    })

    test('onSubmit work correctly', async () => {
        const { getByPlaceholderText, getByText } = render(<Register onSubmit={mockProps} />);
        const nameInput = getByPlaceholderText('Your Name') as HTMLInputElement;
        const emailInput = getByPlaceholderText('ex@ample.com') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const submitButton = getByText('Sign Up');
        const backButton = getByText('Back');

        fireEvent.change(nameInput, {target: { value: 'test' }});
        fireEvent.change(emailInput, {target: { value: 'siapa@dimana.com' }});
        fireEvent.change(passwordInput, { target: { value: '12345678' } });

        fireEvent.click(submitButton, backButton);

        await waitFor(() => {
            expect(mockProps).toHaveBeenCalledTimes(1);
            expect(mockProps).toHaveBeenCalledWith({
                name: 'test',
                email: 'siapa@dimana.com',
                password: '12345678',
            });
        });
    });

})