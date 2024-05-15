import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Links from "../components/Links";
import Links from "../components/links";

test("renders the h3 with the text 'Links'"), () => {
  render(<Links />); 
}