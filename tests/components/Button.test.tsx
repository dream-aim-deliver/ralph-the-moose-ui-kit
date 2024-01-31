import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/button";

describe("<Button/>", () => {
  it("should render the button", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
    expect(screen.getByRole("button")).toHaveClass("text-white");
  });
});
