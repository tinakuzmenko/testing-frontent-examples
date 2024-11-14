import {describe, expect, test} from 'vitest'
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitch from "./ThemeSwitch";
import "@testing-library/jest-dom";

/** These unit tests test internal implementation of the component. But this is a good
 * example of "white box" testing and how fragile they are. As soon as we change the logic
 * of switching from light to dark theme (for example, we start using a styled components
 * library for styling instead of CSS and class names), all tests will break.
 *
 * A better approach would be to do regression tests using screenshots. It would be more reliable.
 **/
describe("ThemeSwitch Component", () => {
  test("shows 'Light' theme by default", () => {
    render(<ThemeSwitch />);

    const wrapper = screen.getByRole("heading", { name: /example 1 - theme switch/i }).parentElement?.querySelector('.Wrapper');

    expect(screen.getByText(/light/i)).toBeInTheDocument();
    expect(screen.getByText(/dark/i)).toBeInTheDocument();

    expect(wrapper).toHaveClass("LightTheme");
  });

  test("switch toggles theme to dark", () => {
    render(<ThemeSwitch />);

    const toggleInput = screen.getByRole("checkbox");
    const wrapper = screen.getByRole("heading", { name: /example 1 - theme switch/i }).parentElement?.querySelector('.Wrapper');

    fireEvent.click(toggleInput);

    expect(wrapper).toHaveClass("DarkTheme");
  });

  test("switch toggles theme back to light", () => {
    render(<ThemeSwitch />);

    const wrapper = screen.getByRole("heading", { name: /example 1 - theme switch/i }).parentElement?.querySelector('.Wrapper');

    const toggleInput = screen.getByRole("checkbox");

    fireEvent.click(toggleInput);
    expect(screen.getByRole("checkbox")).toBeChecked();

    fireEvent.click(toggleInput);
    expect(screen.getByRole("checkbox")).not.toBeChecked();

    expect(wrapper).toHaveClass("LightTheme");
  });
});
