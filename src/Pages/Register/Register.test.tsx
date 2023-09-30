import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Register from ".";

describe("Register Component", () => {
  it("renders the 'Register' header", () => {
    const { getByText } = render(
      // Wrap your component with MemoryRouter
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const regisHeader = getByText("Register Account");
    expect(regisHeader).toBeDefined();
  });

  it("renders 'Name','Email Address' and 'Password' labels", () => {
    const { getByText } = render(
      // Wrap your component with MemoryRouter
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const nameLabel = getByText("Name");
    const emailLabel = getByText("Email Address");
    const passwordLabel = getByText("Password");

    expect(nameLabel).toBeDefined();
    expect(emailLabel).toBeDefined();
    expect(passwordLabel).toBeDefined();
  });

  it("renders the 'Sign Up' button", () => {
    const { getByText } = render(
      // Wrap your component with MemoryRouter
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const regisButton = getByText("Sign Up");
    expect(regisButton).toBeDefined();
  });

  it("renders the 'Back' button", () => {
    const { getByText } = render(
      // Wrap your component with MemoryRouter
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const backButton = getByText("Back");
    expect(backButton).toBeDefined();
  });
});
