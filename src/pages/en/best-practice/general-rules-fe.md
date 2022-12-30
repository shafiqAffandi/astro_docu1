---
title: General Rules R3 - Frontend Development
description: Docs intro
layout: ../../../layouts/MainLayout.astro
---
Standarization is great, might be not the best solution but more to the solution we agreed upon, and we have a lot. Well if that make you worry, here are **TLDR;** for you.

### Typesafe
Typescript, more like javascript with static type. Everything is typed well, from single variable, object, to response API. while `any` type is a feature in typescript, we suggest to avoid the usage of type `any`.

### Component Size
Every project start small and grow bigger as time goes by. Each component will always start from 0 line when developing and grew bigger over time. With bigger component, it makes things tend to be more difficult, especially in readability. That's why we encourage the **code splitting** technique to surpress this issue.  
> ##### When to code split?
> when a component grow more than **500 lines**, maybe you should try to split things up.

### Function Creation
Try to follow **Single Responsibility** principle, means each function only responsible for one purpose only. We also like to have a scoped function to minimize change on global variable. Each function should at least return a value, except for certain condition, like action handler from button.

### Lifecycle Hooks
A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. We recommend each lifecycle hooks only have function inside it, this will improve readibility for other when reading your code.

### Region'd Code
The `#region` directive actually came from C# language. The `#region` directive basically partitions your code. With `#region`, we can organize code into blocks that can be expanded or collapsed visually. To *region'd* your code in VS Code use `// region` to start a region and `// endregion` to end a region.

### Form Handling
CONFINS use a lot of form inside the application. While there are many ways to create a form in Angular, we urge you to follow the form handling guideline.


