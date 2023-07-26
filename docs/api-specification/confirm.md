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
  "user_input": "How do I invite a teammate to my account?",
  "conversation_id": null
}'
```

## Query parameters

---

**conversation_id** `number | null` *Required*

The id returned in the previous response in this conversation. If this is the first message of the conversation, pass `null`

---

**confirm** `boolean` *Required*

Whether to stream the response, allowing the ‘typing’ UX seen in ChatGPT. If true, partial message chunks will be sent as they become available. **Only streaming API is available, so set to `true` or leave out this parameter.**

---

**user_api_key** `string` *(optional)*

To call your API, Superflows may need an API key. This API key is passed in the header set in the Superflows dashboard.

---

**test_mode** `boolean` *(optional)* default `false`

In test mode, all responses from your API are mocked. Set to `false` when in production.

---

## Responses


---
### **200**

`application/json`

Those JSON objects have the following format:

**id** *number*

The conversation id. Required to make further requests in the same conversation.

**role**: `"function" | "error"`

This is the type of message you're receiving.

`"function"` messages contain the response from calls to your API.

`"error"` messages contain error information.

**content**: `string`

The content of the chunk of the response.

If the role is `"function"`, the content is a string in JSON format, which is the response from the action called.

**name**: *string (optional)*

Only present if the role is *“function”*.

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
