import type { Meta, StoryObj } from "@storybook/react";

import UiLoader from "@/components/ui/loader/UiLoader.tsx";

const meta: Meta<typeof UiLoader> = {
    title: "Components/UI/Loader",
    component: UiLoader,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof UiLoader>;

export const Default: Story = {
    args: {
        size: "md",
        color: "white",
    },
};
