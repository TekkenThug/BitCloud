# CryptoExchange React app

## Development

### Import order

```js
// Imports from node_modules (libraries, components and etc.)
import React, { useState } from "react";
import Select from "react-select";
import uuid from "uuid";

// Hooks, services, utils and types
import { useHttp } from "@/hooks";
import apiService from "@/services/api";
import regexps from "@/utils/regexp";
import Product from "@/types/product";

// Components (distant, use absolute path)
import UiButton from "@/components/ui/button";

// Components (near, use relative path). Included tsx extension is required!
import Component from './components/Component.tsx';

// Styles
import styles from "@/styles.module.scss";
import "@/styles/global.scss";

// Icons and images
import Icon from "@/assets/icon.svg";
```
