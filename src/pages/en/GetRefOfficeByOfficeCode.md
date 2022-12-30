---
title: GetRefOfficeByOfficeCode
description: GetRefOfficeByOfficeCode Docu
layout: ../../layouts/MainLayout.astro
---

API to get Ref Office data By Office Code <br>
```
v1/RefOffice/GetRefOfficeByOfficeCode
```

## API Workflow
1. Business Service : GetRefOfficeByOfficeCode(ReqByCodeObj)
2. Set Response Object based on the Return value of Business Service GetRefOfficeByOfficeCode

---
## Data Transfer Object

### Request Object
#### ReqAddAssetCategoryObj
| Field Name | Description | Type   | Required | Example   |
| ---------- | ----------- | ------ | -------- | --------- |
|AssetTypeId|Asset Type Id|long|true|20|
|AssetCategoryCode|Asset Category Code|string|true|CODE|
|AssetCategoryName|Asset Category Name|string|true|CAR|
|IsActive|Boolean Is Active|bool|true|true|



### Response Object
#### AssetTypeObj
| Field Name | Description | Type   | Required | Example   |
| ---------- | ----------- | ------ | -------- | --------- |
|AssetTypeId|Asset Type Identifier|long|false|11|
|AssetTypeCode|Asset Type Code|string|false|CAR|
|AssetTypeName|Asset Type Name|string|false|Car|
|MaxHierarchyLevel|Max Hierarchy Level|int|false|5|
|HierarchyLabelLevel1|Hierarchy Label Level 1|string|false||
|HierarchyLabelLevel2|Hierarchy Label Level 2|string|false||
|HierarchyLabelLevel3|Hierarchy Label Level 3|string|false||
|HierarchyLabelLevel4|Hierarchy Label Level 4|string|false||
|HierarchyLabelLevel5|Hierarchy Label Level 5|string|false||
|SerialNo1Label|Serial No 1 Label|string|false||
|SerialNo2Label|Serial No 2 Label|string|false||
|SerialNo3Label|Serial No 3 Label|string|false||
|SerialNo4Label|Serial No 4 Label|string|false||
|SerialNo5Label|Serial No 5 Label|string|false||
|IsMndtrySerialNo1|Is Mandatory Serial No 1 (Nullable)|bool?|false|false|
|IsMndtrySerialNo2|Is Mandatory Serial No 2 (Nullable)|bool?|false|false|
|IsMndtrySerialNo3|Is Mandatory Serial No 3 (Nullable)|bool?|false|false|
|IsMndtrySerialNo4|Is Mandatory Serial No 4 (Nullable)|bool?|false|false|
|IsMndtrySerialNo5|Is Mandatory Serial No 5 (Nullable)|bool?|false|false|
|IsLoanObj|Is Loan Object|bool|false|false|
|IsActive|Is Active|bool|false|false|


---

## Request Parameter Example
```
[YOUR REQUEST PARAM EXAMPLE HERE (JSON)]

eg.
{
    "requestDateTime": "2022-11-14T09:45:19.821Z",
    "rowVersion": "string",
    "code": "CODE"
}
```

## Reponse Parameter Example
```
[YOUR REQUEST PARAM EXAMPLE HERE (JSON)]

eg.
{
    "headerObj": {
        "responseTime": "string",
        "statusCode": "string",
        "message": "string",
        "errorMessages": [
          {
            "field": "string",
            "message": "string"
          }
        ]
      },
    "statusCode": "string",
    "message": "string",
    "errorMessages": [
    {
        "field": "string",
        "message": "string"
    }
    ],
    "rowVersion": "string",
    "code": "CODE"
}
```
---

## Response Code
[YOUR RESPONSE CODE HERE]

eg.
| Status Code | Error Message | Returns |
| ----------- | ----------- | ----------- |
| **200** | API Process Succeed | BaseResponseObj |

---

## Error Example
[YOUR ERROR EXAMPLE HERE]

eg.
### 401: Authentication Error
```
"Unauthorized"
```