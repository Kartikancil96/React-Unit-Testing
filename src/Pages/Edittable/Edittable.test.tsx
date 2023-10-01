import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Edittable from ".";

describe("Edittable Component Unit Tests", () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test("renders the title", () => {
    const { getByText } = render(

      <MemoryRouter>
        <Edittable />
      </MemoryRouter>
    );
    const titleElement = getByText("Edit Data Form");
    expect(titleElement).toBeDefined();
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

})

