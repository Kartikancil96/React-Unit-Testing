import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Register from ".";

describe("Register Component", () => {
  it("renders the component correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter> {/* Wrap your component in MemoryRouter */}
        <Register />
      </MemoryRouter>
    );

    // Assert that the component's title and form elements are rendered
    expect(getByText("Register Account")).toBeDefined();
    expect(getByPlaceholderText("Your Name")).toBeDefined();
    expect(getByPlaceholderText("ex@ample.com")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
  });

  it("validates form submission", async () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter> {/* Wrap your component in MemoryRouter */}
        <Register />
      </MemoryRouter>
    );

    // Submit the form without filling in any fields
    fireEvent.click(getByText("Sign Up"));

    // Assert that validation error messages are displayed
    await waitFor(() => {
      expect(getByText("Please input your Full Name")).toBeDefined();
      expect(getByText("Email is Required")).toBeDefined();
      expect(getByText("Password is required")).toBeDefined();
    });
  });

  it("handles form submission and redirects on success", async () => {
    // Mock the fetch function to simulate a successful registration
    global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ data: { token: "mock-token" } }),
      });

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter> {/* Wrap your component in MemoryRouter */}
        <Register />
      </MemoryRouter>
    );

    // Fill in the form fields
    fireEvent.change(getByPlaceholderText("Your Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByPlaceholderText("ex@ample.com"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(getByText("Sign Up"));

    // Assert that fetch was called with the correct data
    expect(fetch).toHaveBeenCalledWith(
      "https://mock-api.arikmpt.com/api/user/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "John Doe",
          email: "john@example.com",
          password: "password123",
        }),
      }
    );

    // Assert that localStorage is updated
    expect(localStorage.setItem).toHaveBeenCalledWith("token", "mockToken");
  });
});
