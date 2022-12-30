---
title: Frontend - Development Setup
description: setup frontend development environment
layout: ../../../layouts/MainLayout.astro
---
Ready to start your R3 development? Follow our step-by-step guide to setup frontend development environment on your local machine.

### 1. Install Git
Git is a distributed version control system, used for coordinating work among other developer. You can download Git [here](https://git-scm.com/download/win).

### 2. Install Text Editor
We Recommend [VS Code](https://code.visualstudio.com/Download) with some of our recommended extension.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)  - Visualize code authorship via Git blame annotations and CodeLens

### 3. Install Node.js
Node.js is a Javascript runtime built on Chrome's V8 Javasciprt engine. We recommend using **NVM** (Node Version Manager) to manage Node.js version. You can download NVM [here](https://adins3.sharepoint.com/:u:/s/ConfinsR3CodeGuideline/EYx9JBf_gRdEmikaj0StutEB6mJgQVvJlJaaL1tCAJnb_A?e=XkXZ5U). After installation, run the following command in your terminal.
```
nvm install 14.15.0   // to install Node.js version 14.15.0
nvm list              // to check available node version
nvm use 14.15.0       // to select Node.js Version
```

### 4. Install Angular
Confins R3 using **Angular v13.2.2**. Run the following command in your terminal to install.  
```
npm install -g @angular/cli@13.2.2
```

### 5. Setup Token for Internal Library
Confins R3 use self-developed private library called **UC**. To be able to install this library, run the following command in your terminal.  
```
npm config set //registry.npmjs.org/:_authToken 09829b11-ac1f-443b-9020-bb4b0a4ac21a
```