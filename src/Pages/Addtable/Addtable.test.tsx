import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Addtable from "."; // Import your component

describe("Addtable Component", () => {
  it("renders the component without errors", () => {
    render(<Addtable />);
  });

  it("submits the form successfully", async () => {
    // Mock the fetch function
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );
    global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ data: { token: "mock-token" } }),
      });

    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <Addtable />
    );

    // Fill in the form fields
    fireEvent.change(getByPlaceholderText("Your Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText("Select Status"), {
      target: { value: "true" },
    });

    // Submit the form
    fireEvent.click(getByText("Add New"));

    // Wait for the form submission to complete
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "https://mock-api.arikmpt.com/api/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer mock-token", // Replace with your mock token
          },
          body: JSON.stringify({
            name: "John Doe",
            is_active: "true",
          }),
        }
      );
    });
  });
});
