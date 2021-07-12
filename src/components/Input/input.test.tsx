import { AccountCircle } from "@material-ui/icons";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./index";

test("The input should be in the screen and the label passed by props should be the placeholder.", () => {
  //falta o register
  // render(<Input label="Testando o placeholder" ><AccountCircle/></Input>);
  const testOnScreen = screen.getByPlaceholderText("Testando o placeholder");
  expect(testOnScreen).toBeInTheDocument();
});

test("The value typed should be displayed.", async () => {
  // render(<Input label="Testando o placeholder" ><AccountCircle/></Input>);
  userEvent.type(screen.getByRole("textbox"), "test 01");
  const testOnScreen = await screen.findByDisplayValue("test 01");
  expect(testOnScreen).toBeInTheDocument();
});

