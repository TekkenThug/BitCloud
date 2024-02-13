import type { Meta, StoryObj } from "@storybook/react";

import UiSelect from "@/components/ui/select/UiSelect.tsx";

const meta: Meta<typeof UiSelect> = {
    title: "Components/UI/Select",
    component: UiSelect,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof UiSelect>;

export const Default: Story = {
    args: {
        options: [
            {
                label: "First",
                value: 1,
            },
            {
                label: "Second",
                value: 2,
            },
            {
                label: "Third",
                value: 3,
            },
        ],
    },
};
