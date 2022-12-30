---
title: Form - HTML Integration
description: Integrating Form to HTML
layout: ../../../layouts/MainLayout.astro
---
This section will cover how to integrate a form, in a such uniform way and convinient.

### Form Tag
Form tag is needed to integrate between .ts and .html  file, followed with `[formGroup]` input, `(ngSubmit)` output, and `ngForm` directive
```
<form [formGroup]="Form"
  (ngSubmit)="Form.valid && SaveForm()" #enjiForm="ngForm">
  ...
</form>
```

### Binding to Input Tag
use `formControlName` directive to bind form control to `input` tag
```
<input type="text" formControlName="StringControl">
```

### Submitting Form
use `button` tag with type `submit` to bind the button with `ngSubmit` output
```
<button type="submit">
  save form
</button>

// will call Form.valid and SaveForm() function
```

**not to be confused** with `button` tag with type `button`. this won't bind with `ngSubmit` output
```
<button type="button" (click)="SomeAction()">
  click for action
</button>

// won't call Form.valid and SaveForm() function, 
// instead will call SomeAction() function
```

