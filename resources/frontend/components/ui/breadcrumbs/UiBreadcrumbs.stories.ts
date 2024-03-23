import type { Meta, StoryObj } from "@storybook/react";

import UiBreadcrumbs from "@/components/ui/breadcrumbs/UiBreadcrumbs.tsx";

const meta: Meta<typeof UiBreadcrumbs> = {
    title: "Components/UI/Breadcrumbs",
    component: UiBreadcrumbs,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof UiBreadcrumbs>;

export const Default: Story = {
    args: {
        list: [
            {
                link: "/",
                text: "Home",
            },
            {
                link: "/profile",
                text: "Profile",
            },
            {
                link: "/profile/settings",
                text: "Settings",
            },
        ],
    },
};
