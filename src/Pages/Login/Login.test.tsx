// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import Login from ".";

// // Mock the useNavigate function from react-router-dom
// jest.mock("react-router-dom", () => ({
//   useNavigate: () => jest.fn(),
// }));

// // Mock the fetch function
// global.fetch = jest.fn().mockResolvedValue({
//     json: () => Promise.resolve({ data: { token: "mock-token" } }),
//   });

// describe("Login Component", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("renders without errors", () => {
//     const { getByText, getByPlaceholderText } = render(<Login />);
    
//     // Check if the component renders the "Login" header text
//     expect(getByText("Login")).toBeDefined();
    
//     // Check if email and password input fields are present
//     expect(getByPlaceholderText("ex@ample.com")).toBeDefined();
//     expect(getByPlaceholderText("Password")).toBeDefined();
    
//     // Check if the "Log in" button is present
//     expect(getByText("Log in")).toBeDefined();
//   });

//   it("handles form submission and redirects on successful login", async () => {
//     const { getByPlaceholderText, getByText } = render(<Login />);
//     const emailInput = getByPlaceholderText("ex@ample.com");
//     const passwordInput = getByPlaceholderText("Password");
//     const loginButton = getByText("Log in");

//     // Simulate user input
//     fireEvent.change(emailInput, { target: { value: "test@example.com" } });
//     fireEvent.change(passwordInput, { target: { value: "password123" } });

//     // Simulate form submission
//     fireEvent.click(loginButton);

//     // Wait for fetch to be called
//     await waitFor(() => {
//       expect(global.fetch).toHaveBeenCalledWith(
//         "https://mock-api.arikmpt.com/api/user/login",
//         expect.objectContaining({
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             email: "test@example.com",
//             password: "password123",
//           }),
//         })
//       );
//     });

//     // Check if the user is redirected to "/home"
//     // This assumes that your useNavigate mock is set up to return a function
//     // that can be used to check if it was called with the correct path
//     const navigateMock = require("react-router-dom").useNavigate();
//     expect(navigateMock).toHaveBeenCalledWith("/home");
    
//     // You can also check if the token was stored in localStorage if needed
//   });
// });

import React, {ReactNode}from "react";
import { render } from "@testing-library/react";
import Login from ".";

describe("Login Component", () => {
  it("renders the 'Login' header", () => {
    const { getByText } = render(<Login />);
    const loginHeader = getByText("Login");
    expect(loginHeader).toBeDefined();
  });

  it("renders 'Email Address' and 'Password' labels", () => {
    const { getByText } = render(<Login />);
    const emailLabel = getByText("Email Address");
    const passwordLabel = getByText("Password");

    expect(emailLabel).toBeDefined();
    expect(passwordLabel).toBeDefined();
  });

  it("renders the 'Log in' button", () => {
    const { getByText } = render(<Login />);
    const loginButton = getByText("Log in");
    expect(loginButton).toBeDefined();
  });

  it("renders the 'Still don't have an account?' paragraph", () => {
    const { getByText } = render(<Login />);
    const paragraph = getByText("Still don't have an account?");
    expect(paragraph).toBeDefined();
  });

  it("renders the 'Sign Up!' span", () => {
    const { getByText } = render(<Login />);
    const signUpSpan = getByText("Sign Up!");
    expect(signUpSpan).toBeDefined();
  });
});
