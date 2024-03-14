module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:storybook/recommended",
    ],
    ignorePatterns: ["node_modules", "vendor", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "simple-import-sort"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react-hooks/exhaustive-deps": ["off"],
        "simple-import-sort/imports": [
            "error",
            {
                groups: [
                    ["^react", "^@?\\w"],
                    ["^@/types.*"],
                    ["^@/store.*"],
                    [
                        "^@/router.*",
                        "^@/hooks.*",
                        "^@/services.*",
                        "^@/utils.*",
                        "^@/data.*",
                        "^@/types.*",
                    ],
                    ["^@/components.*"],
                    ["^.+.+.tsx$"],
                    ["^.+\\.?(css)\\/?.*$"],
                    ["^@/assets"],
                ],
            },
        ],
    },
};
