import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputAF from "./index";

test("The input should be in the screen and the label passed by props should be the placeholder.", () => {
  render(<InputAF label="Testando o placeholder" />);
  const testOnScreen = screen.getByPlaceholderText("Testando o placeholder");
  expect(testOnScreen).toBeInTheDocument();
});

test("The value typed should be displayed.", async () => {
  render(<InputAF label="Testing input" />);
  userEvent.type(screen.getByRole("textbox"), "test 01");
  const testOnScreen = await screen.findByDisplayValue("test 01");
  expect(testOnScreen).toBeInTheDocument();
});
