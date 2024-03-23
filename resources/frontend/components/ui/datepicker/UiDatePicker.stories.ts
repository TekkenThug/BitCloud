import type { Meta, StoryObj } from "@storybook/react";

import UiDatePicker from "@/components/ui/datepicker/UiDatePicker.tsx";

const meta: Meta<typeof UiDatePicker> = {
    title: "Components/UI/Datepicker",
    component: UiDatePicker,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiDatePicker>;

export const Default: Story = {
    args: {
        error: "",
        placeholder: "Placeholder",
    },
};
