---
title: Commit Message - Best Practice
description: Commit Message
layout: ../../../layouts/MainLayout.astro
---
Good commit message can help to future-proof yourself and other developer. The extra time it takes to write a thoughtful commit message as a letter to your potential future self is extremely worthwhile. On large scale projects, documentation is imperative for maintenance.

This post is a `TLDR;` based on a post by [Natalie Pina](https://www.freecodecamp.org/news/author/natalie/) titled [How to Write Better Git Commit Messages – A Step-By-Step Guide](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

### The Skeleton

![](/assets/commit-msg.png)  

#### Type
The commit `type` can include the following:
- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `docs` – updates to documentation such as a the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit

#### Optional Scope
The `Optional Scope` can be a JIRA ticket number or module app worked on.

#### Description
The `Description` contain a simple message on what changes. This description content should be short and direct.

### Commit Messages Comparison
Review the following messages and see how many of the suggested guidelines they check off in each category.  

#### Good
- `feat: improve performance with lazy load implementation for images`
- `chore: update npm dependency to latest version`
- `fix: prevent users from submitting the subscribe form`

#### Bad
- `fixed bug on landing page`
- `Changed style`
- empty commit message

Take a look at example below from [Jotai](https://github.com/pmndrs/jotai/pulls?q=is%3Apr+is%3Aclosed) repository
![](/assets/jotai-git-msg.png)