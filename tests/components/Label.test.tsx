import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "@/components/label";

describe("<Label/>", () => {
  it("should render the label", () => {
    render(<Label variant="small" label="Label" />);
    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(screen.getByText("Label")).toHaveTextContent("Label");
  });

  it("should check small labels should have class text-sm", () => {
    render(<Label variant="small" label="Label Test" />);
    expect(screen.getByText("Label Test")).toHaveClass("text-sm");
  });

  it("should check the medium variant of the label has class text-base", () => {
    render(<Label variant="medium" label="Label Test" />);
    expect(screen.getByText("Label Test")).toHaveClass("text-base");
  });
});
