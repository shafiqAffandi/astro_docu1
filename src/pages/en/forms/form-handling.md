---
title: Form Handling
description: Form Handling
layout: ../../../layouts/MainLayout.astro
---
This section will cover how to handle a form, in a such uniform way and convinient.

### Creating Form
Set a variable as a form group using `FormBuilder.group` imported from `@angular/forms` and injected in constructor

```
constructor(
    private fb: FormBuilder,
    ...
) {}
```

```
Form = this.fb.group({
    StringControl: [''],
    NumberControl: [0],
    BooleanControl: [true]
});
```

### Validators
Defining validators when initialize the form by using `Validators` class imported from `@angular/forms`

```
Form = this.fb.group({
    StringControl: ['', [Validators.required]]
});
```

To define validators after certain action or condition, use `get` accessor and `setValidators` setter

```
this.Form.get("StringControl")
         .setValidators([Validators.maxLength(3)]);
```

While `setValidators` give convinient to set a validators, this function will **overwrite** the existing validators set before
```
Form = this.fb.group({
    StringControl: ['', [Validators.required]]
});
this.Form.get("StringControl")
         .setValidators([Validators.maxLength(3)]);

// will only show maximum length character 3, 
// required validator will be overwrite
```

To overcome this situation, use `addValidators` to add another validator to form control without overwrite exisiting validators
```
Form = this.fb.group({
    StringControl: ['', [Validators.required]]
});
this.Form.get("StringControl")
         .addValidators([Validators.maxLength(3)]);

// will show maximum length character 3 validator 
// and required validator
```

### Getting Value from Form
use `get` chained with `value` to get individual value of form control
```
const value = this.Form.get("StringControl").value;
```

use `getRawValue` to get value of all controls inside form and use `as` to cast to desired object so can be accessed using dot annotation

```
const value = this.Form.getRawValue() as T;
/**
*   -autocomplete-
*   value.StringControl
*        .NumberControl
*        .BooleanControl
**/
```

### Updating Form Control Value
there are two ways to update value of a form, using `patchValue` and `setValue`

#### patchValue
Use `patchValue` method to update a subset elements of Form Group
```
this.Form.patchValue({
    StringControl: "Hello, World!",
    BooleanControl: false
});
```

#### setValue
Use `setValue` method to update specific form control value
```
this.Form.get("NumberControl")
         .setValue(777);
```
