import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Login from ".";

describe("Login Component", () => {
  it("renders the 'Login' header", () => {
    const { getByText } = render(
      // Wrap Login component with MemoryRouter
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const loginHeader = getByText("Login");
    expect(loginHeader).toBeDefined();
  });

  it("renders 'Email Address' and 'Password' labels", () => {
    const { getByText } = render(
      // Wrap Login component with MemoryRouter
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailLabel = getByText("Email Address");
    const passwordLabel = getByText("Password");

    expect(emailLabel).toBeDefined();
    expect(passwordLabel).toBeDefined();
  });

  it("renders the 'Log in' button", () => {
    const { getByText } = render(
      // Wrap Login component with MemoryRouter
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const loginButton = getByText("Log in");
    expect(loginButton).toBeDefined();
  });

  it("renders the 'Still don't have an account?' paragraph", () => {
    const { getByText } = render(
      // Wrap Login component with MemoryRouter
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const paragraph = getByText("Still don't have an account?");
    expect(paragraph).toBeDefined();
  });

  it("renders the 'Sign Up!' span", () => {
    const { getByText } = render(
      // Wrap Login component with MemoryRouter
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const signUpSpan = getByText("Sign Up!");
    expect(signUpSpan).toBeDefined();
  });
});
