import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "@/components/toast";
import { NavLink } from "@/components/nav-link";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "inline-radio",
      options: ["success", "error", "warning"],
    },
    title: {
      control: "text",
      description: "The title of the toast.",
    },
    message: {
      control: "text",
      description: "The message to be displayed in the toast.",
    },
    isPermanent: {
      control: "boolean",
      description:
        "Indicate whether the element auto hides or stays permanetly on screen.",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;
const viewInExplorer = (
  <NavLink
    variant="small"
    label="View in Explorer"
    url="https://www.google.com"
  />
);
export const Temporary: Story = {
  args: {
    title: "8640 PR Bridged",
    message: "Tx: 0x1234567890",
    isPermanent: false,
    status: "success",
    children: viewInExplorer,
  },
};

export const Permanent: Story = {
  args: {
    title: "Transaction Failed",
    message: "Tx: 0x1234567890",
    isPermanent: true,
    status: "error",
  },
};
