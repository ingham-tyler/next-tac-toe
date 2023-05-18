import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Next Tac Toe/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
