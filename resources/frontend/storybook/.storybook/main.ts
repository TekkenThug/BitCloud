import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import * as path from "path";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
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
    staticDirs: ["./public"],
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
        autodocs: true,
        defaultName: "Documentation",
    },
};
export default config;
