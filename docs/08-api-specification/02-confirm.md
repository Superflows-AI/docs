---
sidebar_position: 2
---

# Confirm

Call this endpoint to get a Superflows response to user input via our API. It may call your APIs (if you've set them up) to get the right answer.

`POST https://dashboard.superflows.ai/api/v1/answers`

## Authentication

When sending requests to the Superflows API, you need to authenticate using an `Authorization: Bearer` header.

You can find your API token on the [API settings page](https://dashboard.superflows.ai/api-settings). It starts `sfk-*`

### Example request

```
curl -X POST 'https://dashboard.superflows.ai/api/v1/confirm' \\
-H 'Content-type: application/json' \\
-H 'Authorization: Bearer <Your-Superflows-API-key>' \\
-d '{
  "conversation_id": 72734,
  "confirm": true,
  "user_api_key": "<Your-Software's-API-key>",
  
}'
```

## Request body contents

---

**conversation_id** `number` _Required_

The id returned in the previous response in this conversation where confirmation was required.

---

**confirm** `boolean` _Required_

Whether the user confirmed the action should be taken or not. Set to `true` or `false`.

---

**user_api_key** `string` _(optional)_

To call your API, Superflows may need an API key. This API key is passed in the header set in the Superflows dashboard.

---

**api_params** `type below` _(optional)_ default `true`

This enables API-specific information to be set in code. This allows multi-tenant hosting (i.e. changing the hostname of the API depending on the customer/user), and setting headers in API calls through code.

This is an array of objects, each object corresponding to an API that Superflows needs access to. These APIs  must first be added to the Superflows dashboard.

Each object consists of:
- **name** `string` _Required_

    The name of the API. This is used to identify the API in the Superflows dashboard. This must match the name of the API in the dashboard.

- **hostname** `string` _(optional)_

        The hostname of the API. This allows multi-tenant hosting by changing the hostname of an API based on which customer/user is accessing it.

- **headers** `{ [headerName: string]: string }` _(optional)_

    The headers to be sent with all requests made to this API.

Example:

    [
        {
            name: "API name",
            hostname: "https://api.name.com",
            headers: { "cookie": "cookie-value" },
        },
        ...
    ]

---

**mock_api_responses** `boolean` _(optional)_ default `false`

When set to true, all responses from your API are mocked. Set to `false` when in production.

---

## Responses

---

### **200**

`application/json`

Those JSON objects have the following format:

**id** _number_

The conversation id. Required to make further requests in the same conversation.

**role**: `"function" | "error"`

This is the type of message you're receiving.

`"function"` messages contain the response from calls to your API.

`"error"` messages contain error information.

**content**: `string`

The content of the chunk of the response.

If the role is `"function"`, the content is a string in JSON format, which is the response from the action called.

**name**: _string (optional)_

Only present if the role is _“function”_.

---

### **400**

Invalid request body | No API host found - add an API host on the API settings page

---

### **401**

Authentication failed

---

### **404**

No active actions found

---

### **405**

Only POST requests allowed

---

### **500**

Internal Server Error
