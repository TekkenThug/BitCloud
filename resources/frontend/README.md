# CryptoExchange React app

## Development

### Import order

```js
// Imports from node_modules (libraries, components and etc.)
import React, { useState } from "react";
import Select from "react-select";
import uuid from "uuid";

// Services, utils and types
import regexps from "@/utils/regexp";
import Product from "@/types/product";

// Components (near, use relative path)
import Component from './components/Component';

// Components (distant, use absolute path)
import UiButton from "@/components/ui/button";

// Styles
import styles from "@/styles.module.scss";
import "@/styles/global.scss";

// Icons and images
import Icon from "@/assets/icon.svg";
```
