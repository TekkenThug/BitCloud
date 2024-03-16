import type { Meta, StoryObj } from "@storybook/react";

import UiInputSimple from "@/components/ui/input/input-simple/UiInputSimple.tsx";

const meta: Meta<typeof UiInputSimple> = {
    title: "BitCloud/UI/Input simple",
    component: UiInputSimple,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiInputSimple>;

export const Default: Story = {
    args: {
        error: "",
        placeholder: "Placeholder",
    },
};
