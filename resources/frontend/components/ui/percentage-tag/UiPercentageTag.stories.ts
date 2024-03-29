import type { Meta, StoryObj } from "@storybook/react";

import UiPercentageTag from "@/components/ui/percentage-tag/UiPercentageTag.tsx";

const meta: Meta<typeof UiPercentageTag> = {
    title: "Components/UI/Percentage tag",
    component: UiPercentageTag,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof UiPercentageTag>;

export const Default: Story = {
    args: {
        percentage: 10,
    },
};
