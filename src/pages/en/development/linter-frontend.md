---
title: ESLint Integration
description: ESLint Setup and Rules
layout: ../../../layouts/MainLayout.astro
---
Each individual has it own style of code. While it is okay as long as the code run perfectly, it actually can become a burden to other when try to read or fix the code. this where ESLint comes to the rescue. ESLint statically analyzes your code to quickly find problems. It is built into most text editors.  

In this guide, we will try to integrate Angular project with one of the famous linter configuration, [Airbnb](https://airbnb.io/javascript/) with several added rules.

### Prerequisite
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

### Installing Library
Angular has provided it's own library to integrate with ESLint, first we need to add the library to our project and several other library to make it work with typescript.
```
ng add @angular-eslint/schematics
npm i -D eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import
```

### Adding Lint Command 
The `ng add @angular-eslint/schematics` should add this automatically, but make sure this line is added on your angular.json file inside projects.matngular.architect object
```
// angular.json > projects > matngular > architect > lint

"lint": {
  "builder": "@angular-eslint/builder:lint",
  "options": {
    "lintFilePatterns": [
      "src/**/*.ts",
      "src/**/*.html"
    ]
  }
}
```  

Run the following command to run linting tools on Angular application code.

```
ng lint
```

### Creating ESLint Configuration file
Create new `.eslintrc.json` file in the root project. This file will contain all the rules that will applied on your project.
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json"
        ],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "airbnb-base",
        "airbnb-typescript/base"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "linebreak-style": [
          "error",
          "windows"
        ],
        "eol-last": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "arrow-parens": [
          "error",
          "as-needed"
        ],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {
        "@angular-eslint/template/eqeqeq": "off"
      }
    }
  ]
}
```

We will highlight the overrides array object from the above code. There are two main section, rules for `.html` files and `.ts` files. Each object have separated rule responsible for each file type. You can enable or disable a rule inside `rules` object.

### Reference
For more information about rules, check out this reference.
- [ESlint rules](https://eslint.org/docs/latest/rules/)
- [Typescript ESLint](https://typescript-eslint.io/rules/)
- [Airbnb Javascript Style Guide](https://airbnb.io/javascript/)