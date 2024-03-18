import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@/components/modal";
import { IconPlaceholder } from "../../lib";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlaceholderModal: Story = {
  args: {
    children: (
      <b>Let's go! Mario!</b>
    ),
  },
};
