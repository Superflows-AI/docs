---
sidebar_position: 3
pagination_next: 'getting-started/onboarding'
---

# API


## Answers

Call this endpoint to get Superflows to answer a question via our API.

`POST https://dashboard.superflows.ai/api/v1/answers`


## Authentication

When sending requests to the Superflows API, you need to authenticate using an `Authorization: Bearer` header. 

You can find your API token on the [API settings page](https://dashboard.superflows.ai/api-settings).

### Example request

```
curl -X POST 'https://dashboard.superflows.ai/api/v1/answers' \\
-H 'Content-type: application/json' \\
-H 'Authorization: Bearer <Your-Superflows-API-key>' \\
-d '{
  "user_input": "How do I invite a teammate to my account?",
	"conversation_id": null
}'
```

## Query parameters

---

**user_input** *string* Required

The text typed by the user in the chat box

---

**conversation_id** *uuid | null* Required

The id returned in the previous response in this conversation. If this is the first message of the conversation, pass `null`

---

**user_description** *string*

A description of the user created by the developer.

E.g. ```The user’s name is Bob. They are a customer experience manager at skynet corporation```

---

**language** *string default English*

Angela will respond to the user’s request in this language.

---

**user_api_key** *string*

If Angela requires authentication to call your API, then include this here.

---

**stream** *boolean default true*

Whether to stream the response, allowing the ‘typing’ UX seen in ChatGPT. If true, partial message chunks will be sent as they become available. **Only streaming API is available, so set to `true` or leave out this parameter.**

## Responses


---
### **200**
    
**id** *uuid*

The conversation id. Required to make further requests in the same conversation.

**role**: *“assistant” | “function” | “debug” | “error”*

**content**: *string*

The content of the chunk of the response. If the role is ***********“function”***********, the content is a string in JSON format, which is the response from the action called.

**name**: *string (optional)*

Only present if the role is *“function”*.

**Example chunk**

```jsx
{"id":488,"role":"assistant","content":"information"}
```

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

---

### **501**
    
    Currently only the streaming API (stream=true) has been implemented. 