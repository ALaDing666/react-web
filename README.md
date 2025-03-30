# 1、安装eslint相关依赖
```shell
pnpm add eslint typescript-eslint @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-prettier eslint-config-prettier prettier -D
```

# 2、配置eslint.config.js
```js
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
);
```

# 3、配置prettier.config.js
```js
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  jsxSingleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
};
```

# 4、配置package.json
```json
{
  "scripts": {
    "fomrat": "prettier --write \"**/*.{js,jsx,ts,tsx}\"",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```

# 5、重新打开项目

# 6、安装husky
```shell
pnpm add husky -D
```

# 7、初始化husky
```shell
pnpm husky init
```
# 8、安装lint-staged
```shell
pnpm add lint-staged -D
```

# 9、配置lint-staged
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "npm run eslint:fix",
    ]
  }
}