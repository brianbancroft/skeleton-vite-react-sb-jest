import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories"; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Primary, Secondary } = composeStories(stories);

test("renders primary button with default args", () => {
  render(<Primary />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).not.toBeNull();
});
