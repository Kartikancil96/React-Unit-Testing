import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Addtable from ".";

describe("Addtable Component Unit Tests", () => {
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
        <Addtable />
      </MemoryRouter>
    );
    const titleElement = getByText("Add New Data");
    expect(titleElement).toBeDefined();
  });

  test("renders the buttons", () => {
    render(
      <MemoryRouter>
        <Addtable />
      </MemoryRouter>
    );
    const editButtonElement = screen.getByText("Add New");
    const backButtonElement = screen.getByText("Back");

    expect(editButtonElement).toBeDefined();
    expect(backButtonElement).toBeDefined();
  });

})

