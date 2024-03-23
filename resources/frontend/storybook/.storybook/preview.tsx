import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { MemoryRouter } from "react-router-dom";

import "@/assets/styles/vendors.scss";
import "@/assets/styles/reset.scss";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            theme: themes.dark,
        },
    },
};

export const decorators = [
    //@ts-ignore
    (Story) => (
        <MemoryRouter initialEntries={["/"]}>
            <Story />
        </MemoryRouter>
    ),
];

export default preview;
