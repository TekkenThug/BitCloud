## Project structure

```bash
├─assets
│   ├─icons         // SVG icons, separated by usage context
│   ├─images        // Static images
│   └─styles        // SCSS styles, included variables, mixins, typography and etc.
├─components
│   ├─common        // Commonly used images
│   ├─layouts       // Page layouts
│   ├─pages         // Page views, use with React Router
│   └─ui            // UI Components
├─data              // Mocks, RegExps variables and etc
├─hooks             // Self-write hooks
├─router            // React router config
├─services
│   ├─api           // API autogenerate
│   └─validations   // Validation rules (using Zod.js)
├─store             // Redux store
│   ├─[reducerName] // Reducers
│   └─index.ts      // Common store file
├─storybook         // Storybook with components
├─types             // Types, interfaces and etc.
└─utils             // Different util functions
```

## Import order

```js
// Imports from node_modules (libraries, components and etc.)
import React, { useState } from "react";
import Select from "react-select";
import uuid from "uuid";

// Store
import countReducer from "@/stores/index";

// Hooks, services, utils and types
import { useHttp } from "@/hooks";
import apiService from "@/services/api";
import regexps from "@/utils/regexp";
import mock from "@/data/currency";
import Product from "@/types/product";

// Components (distant, use absolute path)
import UiButton from "@/components/ui/button";

// Components (near, use relative path). Included tsx extension is required!
import Component from "./components/Component.tsx";

// Styles
import styles from "@/styles.module.scss";
import "@/styles/global.scss";

// Icons and images
import Icon from "@/assets/icon.svg";
```

## Class naming

For component styling use ONLY scss modules

## Storybook

For viewing Storybook locally, use following command

```bash
npm run sb:dev
```

## Generate API service

New API routes must be added to OpenAPI schema in `api/openapi.yaml` file
Then run command for regenerate API service

```bash
npm run api:generate
```
