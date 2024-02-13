import type { Meta, StoryObj } from "@storybook/react";

import UiLabel from "@/components/ui/label/UiLabel.tsx";

const meta: Meta<typeof UiLabel> = {
    title: "Components/UI/Label",
    component: UiLabel,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiLabel>;

export const Default: Story = {
    args: {
        title: "Label",
        color: "blue",
    },
};
