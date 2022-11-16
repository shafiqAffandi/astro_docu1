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
## Data Transfer Objects

### Request Object
#### ReqByCodeObj
| Field Name | Description | Type   | Required | Example   |
| ---------- | ----------- | ------ | -------- | --------- |
| Code       | Office Code | String | true     | KBJERUK01 |


### Response Object
#### ResponseRefOfficeObj
| Field Name          | Description                         | Type   | Example       |
| -----------         | -----------                         | ------ | -----------   |
| RefOfficeId         | Ref Office Identifier               | Long   | 1             |
| OfficeCode          | Office Code                         | String | KBJERUK01     |
| OfficeName          | Office Name                         | String | Kebon Jeruk 1 |
| OfficeShortName     | Office Short Name                   | String | Kb. Jeruk     |
| MrKonvenSyariahCode | Master Konvenisonal or Syariah Code | String | KONVEN        |

---

## Request Parameter Example
```
{
  "requestDateTime": "2022-11-14T09:45:19.821Z",
  "rowVersion": "string",
  "code": "CODE"
}
```

## Response Parameter Example
```
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
  "refOfficeId": 11,
  "officeCode": "HO",
  "officeName": "Head Office",
  "officeShortName": "Head Office",
  "mrKonvenSyariahCode": "KON",
  "officeAddr": "Address 1",
  "zipcode": "13430",
  "areaCode1": "Duren Sawit",
  "areaCode2": "Pondok Bambu",
  "areaCode3": "1",
  "areaCode4": "2",
  "city": "Jakarta",
  "phnArea1": "021",
  "phn1": "88777999",
  "phnExt1": "1",
  "phnArea2": "021",
  "phn2": "88777999",
  "phnExt2": "1",
  "phnArea3": "021",
  "phn3": "88777999",
  "phnExt3": "1",
  "faxArea": "021",
  "fax": "88777999",
  "cntctPersonName": "AdIns",
  "cntctPersonJobTitle": "Supervisor",
  "cntctPersonEmail1": "adins@gmail.com",
  "cntctPersonEmail2": "adins@gmail.com",
  "cntctPersonMobilePhnNo1": "087772222",
  "cntctPersonMobilePhnNo2": "087772222",
  "mrOfficeClassCode": "S / M / L",
  "refOfficeAreaId": 1,
  "parentOfficeCode": "002",
  "parentOfficeName": "Kebon Jeruk",
  "isActive": false,
  "parentId": 1,
  "isOfficeClose": false,
  "officeOpeningDt": "2021-01-22",
  "isAllowAppCreated": false,
  "holidaySchmHId": 1,
  "workingHourSchmHId": 1,
  "isVirtualOffice": false,
  "mrOfficeTypeCode": "BRANCH",
  "mrCenterGrpTypeCode": "COLL_GRP",
  "isHaveCashier": false,
  "isNationalCourt": false,
  "nationalCourtOffice": "Court",
  "isNpwp": false,
  "taxIdNo": "20111",
  "taxPayerNo": "20111",
  "hierarchyLvl": 0
}
```
---

## Response Codes
| Status Code | Error Message | Returns |
| ----------- | ----------- | ----------- |
| **200** | API Process Succeed | ResponseRefOfficeObj |
| **401** | Authentication Error | BaseResponseObj |
| **404** | RefOffice with RefOfficeCode CODE does not exist. | BaseResponseObj |
| **500** | Get Error | BaseResponseObj |

---

## Error Example
### 401 : Authentication Error
```
"Unauthorized"
```