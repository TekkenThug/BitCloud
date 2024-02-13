import type { Meta, StoryObj } from "@storybook/react";

import UiButton from "@/components/ui/button/UiButton.tsx";

const meta: Meta<typeof UiButton> = {
    title: "Components/UI/Button",
    component: UiButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiButton>;

export const Default: Story = {
    args: {
        color: "blue",
        size: "medium",
        children: "Button",
    },
};
