import { expect, describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "@/components/button";

const onClickCallback: () => boolean = () => {
  return true;
};

const mocks = {
  onClickCallback,
};

describe("<Button/>", () => {
  it("renders a primary button", () => {
    render(<Button variant="primary" label="Primary" />);
    expect(screen.getByText("Primary")).toBeInTheDocument();
  });

  it("renders a secondary button", () => {
    render(<Button variant="secondary" label="Secondary" />);
    expect(screen.getByText("Secondary")).toBeInTheDocument();
  });

  it("ensures onClick is called", () => {
    const onClick = vi.spyOn(mocks, "onClickCallback");
    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Button variant="primary" label="Primary" onClick={onClick as any} />,
    );
    const buttonComponent = screen.getByText("Primary");
    fireEvent.click(buttonComponent);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("ensures button is disabled if disabled prop is set", () => {
    render(<Button variant="secondary" label="Secondary" disabled />);
    const buttonComponent = screen.getByText("Secondary");
    expect(buttonComponent).toBeDisabled();
  });

  it("ensures button is not disabled if disabled prop is not set", () => {
    render(<Button variant="secondary" label="Secondary" />);
    const buttonComponent = screen.getByText("Secondary");
    expect(buttonComponent).not.toBeDisabled();
  });
});
