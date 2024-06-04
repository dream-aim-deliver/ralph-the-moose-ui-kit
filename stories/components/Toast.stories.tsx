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
    id: "123",
    title: "8640 PR Bridged",
    message: "Tx: 0x1234567890",
    status: "success",
    children: viewInExplorer,
  },
};

export const Permanent: Story = {
  args: {
    id: "1234",
    title: "Transaction Failed",
    message: "Tx: 0x1234567890",
    status: "error",
  },
};
