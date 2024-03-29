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

  it("ensures onClick is not called when disabled", () => {
    const onClick = vi.spyOn(mocks, "onClickCallback");
    render(
      <Button
        variant="primary"
        label="Primary"
        onClick={onClick as unknown as () => void}
        disabled
      />,
    );
    const buttonComponent = screen.getByText("Primary");
    fireEvent.click(buttonComponent);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
