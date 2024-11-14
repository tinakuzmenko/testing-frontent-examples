import {describe, expect, test} from 'vitest'

import { render, screen, fireEvent } from "@testing-library/react";
import UnitConverter from "./UnitConverter";

describe("UnitConverter Component", () => {

  /** The values of these type of tests:
  - Verifies and documents basic component structure
  - improves development confidence
  - Catches regressions early
  - Foundation for more complex tests **/
  test("renders input fields for miles and kilometers", () => {
    render(<UnitConverter />);

    const milesInput = screen.getByLabelText(/miles/i);
    const kilometersInput = screen.getByLabelText(/kilometers/i);

    expect(milesInput).toBeInTheDocument();
    expect(kilometersInput).toBeInTheDocument();
  });

  test("converts miles to kilometers correctly", () => {
    render(<UnitConverter />);

    const milesInput = screen.getByLabelText(/miles/i) as HTMLInputElement;
    const kilometersInput = screen.getByLabelText(/kilometers/i) as HTMLInputElement;

    fireEvent.change(milesInput, { target: { value: "1" } });

    // 1 mile = 1.60934 km, rounded to 1.61, so we expect 1.61
    expect(kilometersInput.value).toBe("1.61");
  });

  test("converts kilometers to miles correctly", () => {
    render(<UnitConverter />);

    const milesInput = screen.getByLabelText(/miles/i) as HTMLInputElement;
    const kilometersInput = screen.getByLabelText(/kilometers/i) as HTMLInputElement;

    fireEvent.change(kilometersInput, { target: { value: "1.61" } });

    // 1.61 km ≈ 1 mile, rounded to 1.00, so we expect 1.00
    expect(milesInput.value).toBe("1.00");
  });

  test("clears kilometers input when miles input is cleared", () => {
    render(<UnitConverter />);

    const milesInput = screen.getByLabelText(/miles/i) as HTMLInputElement;
    const kilometersInput = screen.getByLabelText(/kilometers/i) as HTMLInputElement;

    fireEvent.change(milesInput, { target: { value: "1" } });
    fireEvent.change(milesInput, { target: { value: "" } });

    expect(kilometersInput.value).toBe("");
  });

  test("clears miles input when kilometers input is cleared", () => {
    render(<UnitConverter />);

    const milesInput = screen.getByLabelText(/miles/i) as HTMLInputElement;
    const kilometersInput = screen.getByLabelText(/kilometers/i) as HTMLInputElement;

    fireEvent.change(kilometersInput, { target: { value: "1.61" } });
    fireEvent.change(kilometersInput, { target: { value: "" } });

    expect(milesInput.value).toBe("");
  });

  test("displays empty string for non-numeric input in miles", () => {
    render(<UnitConverter />);

    const milesInput = screen.getByLabelText(/miles/i) as HTMLInputElement;
    const kilometersInput = screen.getByLabelText(/kilometers/i) as HTMLInputElement;

    fireEvent.change(milesInput, { target: { value: "abc" } });

    expect(kilometersInput.value).toBe("");
  });

  test("displays empty string for non-numeric input in kilometers", () => {
    render(<UnitConverter />);

    const milesInput = screen.getByLabelText(/miles/i) as HTMLInputElement;
    const kilometersInput = screen.getByLabelText(/kilometers/i) as HTMLInputElement;

    fireEvent.change(kilometersInput, { target: { value: "abc" } });

    expect(milesInput.value).toBe("");
  });
});
