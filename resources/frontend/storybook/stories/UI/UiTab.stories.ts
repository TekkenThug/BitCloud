import type { Meta, StoryObj } from "@storybook/react";

import UiTab from "@/components/ui/tab/UiTab.tsx";

import "@/assets/styles/global.scss";

const meta: Meta<typeof UiTab> = {
    title: "BitCloud/UI/Tab",
    component: UiTab,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiTab>;

export const Default: Story = {
    args: {
        text: "Tab",
        theme: "dark",
    },
};
