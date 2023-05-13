import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../modal";
// import { useState } from "react";

const meta = {
  title: "Example/Requirements",
  component: Modal,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    displayed: {
      control: { type: "boolean" },
    },
    onClick: {},
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

// const [isDisplayed, setIdDisplayed] = useState<boolean>(true);

export const Primary: Story = {
  args: {
    title: "Titre",
    description: "Description",
    // displayed: isDisplayed,
    // onClick: () => {
    //   setIdDisplayed(!isDisplayed);
    // },
    displayed: true,
    onClick: () => {},
  },
};
