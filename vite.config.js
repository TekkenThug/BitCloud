import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/frontend/main.tsx"],
            refresh: true,
        }),
        react(),
        tsconfigPaths(),
        svgr(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@use './resources/frontend/assets/styles/exported' as *;"
            }
        }
    },
    resolve: {
        alias: {
            "@": "/resources/frontend",
        },
    },
});

