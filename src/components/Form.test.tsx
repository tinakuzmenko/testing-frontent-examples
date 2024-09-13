import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import "@testing-library/jest-dom";

describe("Form Component", () => {
  test("shows validation errors when submitting empty form", async () => {
    // ARRANGE
    render(<Form />);

    // ACT
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // ASSERT
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/age is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/you must agree to the terms/i)
      ).toBeInTheDocument();
    });
  });

  test("does not show validation errors when form is valid", () => {
    // ARRANGE
    render(<Form />);

    const nameInput = screen.getByLabelText(/your name/i);
    const ageInput = screen.getByLabelText(/your age/i);
    const checkbox = screen.getByLabelText(/I agree to terms and conditions/i);

    const submitButton = screen.getByRole("button", { name: /submit/i });

    // ACT
    userEvent.type(nameInput, "Jane Doe");
    userEvent.type(ageInput, "30" )
    userEvent.click(checkbox);

    userEvent.click(submitButton);

    // ASSERT
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/age is required/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/you must agree to the terms/i)
    ).not.toBeInTheDocument();
  });

  test("shows submitted message when form is valid", async () => {
    // ARRANGE
    render(<Form />);

    const nameInput = screen.getByLabelText(/your name/i);
    const ageInput = screen.getByLabelText(/your age/i);
    const checkbox = screen.getByLabelText(/I agree to terms and conditions/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // ACT
    await userEvent.type(nameInput, "Jane Doe");
    await userEvent.type(ageInput, "30");
    await userEvent.click(checkbox);
    await userEvent.click(submitButton);

    // ASSERT
    await waitFor(() => {
      expect(screen.getByText(/form submitted!/i)).toBeInTheDocument();
    });
  });
});
