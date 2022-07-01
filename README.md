# webapp

Boot.dev's web app frontend - https://boot.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/1e61fa8a-eb49-4d5b-96e0-b1696a617e58/deploy-status)](https://app.netlify.com/sites/qvaultclassroom/deploys) ![Tests](https://github.com/bootdotdev/webapp/workflows/Tests/badge.svg)

## A note on the license

You can read the [license here](/LICENSE). In short, we opened our code to give students transparent visibility into our code for educational purposes. You are free to contribute to this codebase, but we do *not* allow you to distribute this code for your own purposes or for use in your own projects.

## 🚀 Quick Start

Use the proper version of node:

```bash
nvm use
```

Install deps:

```bash
yarn install
```

Run the dev server:

```bash
yarn serve
```

## Recommended VS Code Settings

Add settings to `.vscode/settings.json`. Note: they won't work unless you open VS Code to the root of this repo.

```json
{
  "files.eol": "\n",
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.options": {
    "configFile": ".eslintrc.json"
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "css.customData": [
    ".vscode/css_custom_data.json"
  ],
  "editor.tabSize": 2
}
```

Plugins:

* ESLint by Microsoft
* Vetur by Pine Wu
* YAML by Red Hat
* Tailwind CSS IntelliSense by Tailwind Labs
