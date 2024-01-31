import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Heading, HeadingVariant } from "@/components/heading";

describe("<Heading/>", () => {
  it("should render the heading", () => {
    render(<Heading title="Heading" variant={HeadingVariant.H4} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Heading");
  });

  it("should check the title of the heading", () => {
    render(<Heading title="Heading Test" variant={HeadingVariant.H4} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Heading Test");
  });

  it("HeadingVariant.H4 should render the heading with text-xxl class", () => {
    render(<Heading title="Heading" variant={HeadingVariant.H4} />);
    expect(screen.getByRole("heading")).toHaveClass("text-xxl");
  });

  it("HeadingVariant.H5 should render the heading with text-xl class", () => {
    render(<Heading title="Heading" variant={HeadingVariant.H5} />);
    expect(screen.getByRole("heading")).toHaveClass("text-xl");
  });
});
