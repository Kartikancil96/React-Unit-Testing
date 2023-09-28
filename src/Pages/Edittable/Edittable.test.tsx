import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Edittable from "."; // Update the import path as per your project structure

// Mock the react-router-dom useParams hook
jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ id: "1" }), // Replace with the appropriate ID for testing
}));

describe("Edittable Component", () => {
  it("renders without errors", () => {
    render(<Edittable />);
    expect(screen.getByText("Edit Data Form")).toBeDefined();
  });

  it("handles form submission", async () => {
    // Mock the fetch function to simulate API call
    global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ data: { token: "mock-token" } }),
      });

    render(<Edittable />);
    
    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "John Doe" },
    });
    
    fireEvent.click(screen.getByText("Active")); // Choose an option from the dropdown

    fireEvent.click(screen.getByText("Edit Data"));

    // Wait for the fetch call to resolve
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mock-api.arikmpt.com/api/category/update",
        expect.objectContaining({
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: expect.stringContaining("Bearer"),
          },
          body: JSON.stringify({
            id: "1", // Mocked useParams value
            name: "John Doe",
            is_active: "true", // Chosen option from dropdown
          }),
        })
      );
    });

    // Check if navigation occurred after form submission
    expect(screen.queryByText("Edit Data Form")).not.toBeDefined();
    expect(screen.getByText("Back")).toBeDefined();
  });

  it("handles navigation back to home", () => {
    const { container } = render(<Edittable />);
    fireEvent.click(screen.getByText("Back"));
    // You can add assertions to check if navigation occurred correctly
  });
});
