---
title: Form Array
description: Form Array
layout: ../../../layouts/MainLayout.astro
---
While object can have an array, so does form. This section will cover how to handle Form array in a such uniform and convinient way

### Initializing Form Array
Set a variable as a form array using `FormBuilder.array` imported from `@angular/forms` and injected in constructor  

```
constructor(
    private fb: FormBuilder,
    ...
) {}
```

```
Form = this.fb.array([]);
```

while you can define a standalone form array, commonly we wrap form array inside a form group

```
Form = this.fb.group({
    StringControl: ['', [Validators.required]],
    FormList: this.fb.array([])
});
```

### Getter for Form Array
Managing array can be a burden, to overcome this problem we can create a getter to get individual form array and make the code cleaner
```
get GetFormList() {
    const listForm = this.Form.get('FormList') as FormArray;
    return listForm.controls;
}
```

### Insert a Form to Form Array
initiate a new Form Group instance using `group` then use `push` method to insert a new form at the end of the array.
```
const SubForm = this.fb.group({
    SubNumberControl: [0, [Validators.required]],
    SubBooleanControl: false
});
const FormList = this.GetFormList;
FormList.push(SubForm);

console.log(this.Form.getRawValue());
/**
*    {
*        StringControl: '',
*        FormList: [
*            {
*                SubNumberControl: 0,
*                SubBooleanControl: false
*            }
*        ]
*    }
**/
```

### Insert a Pre-defined value form to Form Array
Let's say we have a response object and want to insert it into our form array. 
```
const response = [
    {
        number: 13,
        boolean: false
    },
    {
        number: 20,
        boolean: true
    }
];
```

using a simple loop and getter `GetFormList` that we define before, this matter became easy
```
const FormList = this.GetFormList;
for (let i = 0; i < response.length; i++) {
    const SubForm = this.fb.group({
        SubNumberControl: response[i].number,
        SubBooleanControl: response[i].boolean
    });
    FormList.push(SubForm);
}

console.log(this.Form.getRawValue());
/**
*    {
*        StringControl: '',
*        FormList: [
*            {
*                SubNumberControl: 13,
*                SubBooleanControl: false
*            },
*            {
*                SubNumberControl: 20,
*                SubBooleanControl: true
*            }
*        ]
*    }
**/
```

### Accessing Value of Form Array
Let's say we want to sum all `SubNumberControl` from our form. Again, We can use getter `GetFormList` alongside `get` accessor to get each array value
```
let SumNumber = 0;
const FormList = this.GetFormList;
for (let i = 0; i < FormList.length; i++) {
    SumNuber += FormList[i].get('SubNumberControl').value;
}

console.log(SumNumber); // 33
```

### Integrating Form Array With Html file
While it a bit same with how we integrating form group with html, Form Array has `formArrayName` directive to bind to Form Array and `FormGroupName` directive to keep track the name of the Form Group for each array in Form Array 

```
<form [formGroup]="Form"
  (ngSubmit)="Form.valid && SaveForm()" #enjiForm="ngForm">
  <tbody *ngIf="GetFormList.length">
    <tr formArrayName="FormList" *ngFor="let item of GetFormList; let i = index">
      <td [formGroupName]="i">
        <input type="number" formControlName="SubNumberControl">
      </td>
    </tr>
  </tbody>
</form>
```