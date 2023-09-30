import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Edittable from ".";

describe("Edittable Component Unit Tests", () => {
  test("renders the title", () => {
    render(
      <MemoryRouter>
        <Edittable />
      </MemoryRouter>
    );
    const titleElement = screen.getByText("Edit Data Form");
    expect(titleElement).toBeDefined();
  });

  test("renders the card", () => {
    render(
      <MemoryRouter>
        <Edittable />
      </MemoryRouter>
    );
    const cardElement = screen.getByTestId("edit-card");
    expect(cardElement).toBeDefined();
  });

  test("renders the form", () => {
    render(
      <MemoryRouter>
        <Edittable />
      </MemoryRouter>
    );
    const formElement = screen.getByTestId("edit-form");
    expect(formElement).toBeDefined();
  });

  test("renders the label form", () => {
    render(
      <MemoryRouter>
        <Edittable />
      </MemoryRouter>
    );
    const nameLabelElement = screen.getByLabelText("Your Name");
    const statusLabelElement = screen.getByLabelText("Select Status");

    expect(nameLabelElement).toBeDefined();
    expect(statusLabelElement).toBeDefined();
  });

  test("renders the buttons", () => {
    render(
      <MemoryRouter>
        <Edittable />
      </MemoryRouter>
    );
    const editButtonElement = screen.getByText("Edit Data");
    const backButtonElement = screen.getByText("Back");

    expect(editButtonElement).toBeDefined();
    expect(backButtonElement).toBeDefined();
  });

  test("submitting the form calls handleEdit function", () => {
    // Mock the fetch function and localStorage
    const mockFetch = jest.fn(() => Promise.resolve({}));
    global.fetch = mockFetch;
    const mockLocalStorage = {
      getItem: jest.fn(() => "mockToken"),
    };
    Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

    render(
      <MemoryRouter>
        <Edittable />
      </MemoryRouter>
    );

    // Fill out the form
    const nameInput = screen.getByPlaceholderText("Your Name");
    const statusSelect = screen.getByPlaceholderText("Select Status");
    const editButton = screen.getByText("Edit Data");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(statusSelect, { target: { value: "true" } });
    fireEvent.click(editButton);

    // Verify that handleEdit function is called with the correct values
    expect(mockFetch).toHaveBeenCalledWith(
      "https://mock-api.arikmpt.com/api/category/update",
      expect.objectContaining({
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer mockToken",
        },
        body: JSON.stringify({
          id: "mockId", // You should set the id value for testing
          name: "John Doe",
          is_active: "true",
        }),
      })
    );
  });
});
