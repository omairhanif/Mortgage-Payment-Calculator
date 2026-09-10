import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
    {
        ignores: [".next/**", "node_modules/**", "out/**", "dist/**"],
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
            globals: {
                React: "readonly",
                JSX: "readonly",
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                console: "readonly",
                setTimeout: "readonly",
            },
        },
        plugins: {
            "@next/next": nextPlugin,
            "react-hooks": reactHooks,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
        },
    },
]);
