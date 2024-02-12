import type { Meta, StoryObj } from "@storybook/react";

import UiInputConfirm from "@/components/ui/input/input-confirm/UiInputConfirm.tsx";

import "@/assets/styles/global.scss";

const meta: Meta<typeof UiInputConfirm> = {
    title: "BitCloud/UI/Input confirm",
    component: UiInputConfirm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiInputConfirm>;

export const Default: Story = {
    args: {
        placeholder: "Email",
    },
};
