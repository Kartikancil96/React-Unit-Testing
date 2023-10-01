import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from ".";

describe("Profile component", () => {
  it("renders the title, paragraph, and button", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    // Test the title
    const titleElement = screen.getByText("Data Profile");
    expect(titleElement).toBeDefined();

    // Test the paragraph
    const paragraphElement = screen.getByText(/ID:/); // You can use a regex to match "ID:" in the text
    expect(paragraphElement).toBeDefined();

    // Test the button
    const buttonElement = screen.getByText("Back");
    expect(buttonElement).toBeDefined();
  });
});
