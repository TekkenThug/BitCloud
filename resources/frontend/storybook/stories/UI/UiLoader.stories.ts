import type { Meta, StoryObj } from "@storybook/react";

import UiLoader from "@/components/ui/loader/UiLoader.tsx";

const meta: Meta<typeof UiLoader> = {
    title: "BitCloud/UI/Loader",
    component: UiLoader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiLoader>;

export const Default: Story = {
    args: {
        size: "md",
        color: "white",
    },
};
