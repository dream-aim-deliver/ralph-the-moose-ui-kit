import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { Link } from "@/components/link";

const onClickCallback: () => boolean = () => {
  return true;
};

const mocks = {
  onClickCallback,
};

describe("<Link/>", () => {
  it("should render the link text component", () => {
    render(<Link variant="small" label="Link Text" />);
    expect(screen.getByText("Link Text")).toBeInTheDocument();
    expect(screen.getByText("Link Text")).toHaveTextContent("Link Text");
  });

  it("should check small link texts should have class text-xs", () => {
    render(<Link variant="small" label="Link Text" />);
    expect(screen.getByText("Link Text")).toHaveClass("text-xs");
  });

  it("should check the medium variant of the link text has class text-base", () => {
    render(<Link variant="medium" label="Link Text" />);
    expect(screen.getByText("Link Text")).toHaveClass("text-base");
  });

  it("should check link expands on hover", () => {
    render(<Link variant="medium" label="Link Text" />);
    expect(screen.getByText("Link Text")).toHaveClass("hover:scale-110");
  });

  it("should check onClick is called", () => {
    const onClick = vi.spyOn(mocks, "onClickCallback");
    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Link variant="medium" label="Link Text" onClick={onClick as any} />,
    );
    const linkComponent = screen.getByText("Link Text");
    fireEvent.click(linkComponent);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
