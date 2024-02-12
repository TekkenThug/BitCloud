import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import * as path from "path";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    core: {
        builder: {
            name: "@storybook/builder-vite",
            options: {
                viteConfigPath: "vite.config.js",
            },
        },
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "../../"),
                },
            },
        });
    },
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;