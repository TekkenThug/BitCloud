import type { Meta, StoryObj } from "@storybook/react";

import UiCheckbox from "@/components/ui/checkbox/UiCheckbox.tsx";

const meta: Meta<typeof UiCheckbox> = {
    title: "BitCloud/UI/Checkbox",
    component: UiCheckbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiCheckbox>;

export const Default: Story = {
    args: {
        children: "value",
    },
};
