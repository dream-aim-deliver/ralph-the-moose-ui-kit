import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Paragraph } from "@/components/paragraph";

describe("<Paragraph/>", () => {
  it("should render the paragraph", () => {
    render(<Paragraph variant="primary">paragraph / medium</Paragraph>);
    expect(screen.getByText("paragraph / medium")).toBeInTheDocument();
    expect(screen.getByText("paragraph / medium")).toHaveTextContent(
      "paragraph / medium",
    );
  });

  it("should check the paragraph with children", () => {
    render(
      <Paragraph variant="primary">
        <span>paragraph / span </span>
      </Paragraph>,
    );
    expect(screen.getByText("paragraph / span")).toBeInTheDocument();
    expect(screen.getByText("paragraph / span")).toHaveTextContent(
      "paragraph / span",
    );
  });
});
