import { addons } from "@storybook/manager-api";
import MainTheme from "./MainTheme.ts";

addons.setConfig({
    theme: MainTheme,
});
