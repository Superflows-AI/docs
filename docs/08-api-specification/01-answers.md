---
sidebar_position: 1
pagination_next: 'api-specification/confirm'
---

# Answers

Call this endpoint to get a Superflows response to user input via our API. It may call your APIs (if you've set them up) to get the right answer.

`POST https://dashboard.superflows.ai/api/v1/answers`


## Authentication

When sending requests to the Superflows API, you need to authenticate using an `Authorization: Bearer` header. 

You can find your API token on the [API settings page](https://dashboard.superflows.ai/api-settings). It starts `sfk-*`

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

**user_input** `string` *Required*

The text typed by the user in the chat box.

---

**conversation_id** `number | null` *Required*

The id returned in the previous response in this conversation. If this is the first message of the conversation, pass `null`

---

**user_description** `string` *(optional)*

With each API request, you can provide a description of the user who is asking the question, any useful information for accessing your API (e.g. user id) and instructions on how to address them.

This can also make the LLM faster to respond, since it won't need to query your APIs to get relevant ids before making subsequent queries.

E.g. `"Bill is a salesperson at Acme Corp. His project id is f35ahe2g1p. He's not comfortable with statistical terms, instead use plain English to answer his questions."`

This is never stored on our servers or in our databases.

---

**user_api_key** `string` *(optional)*

To call your API, Superflows may need an API key. This API key is passed in the header set in the Superflows dashboard.

Find out more about this in the [Connecting your API documentation page](/docs/connecting-your-api/api-host).

---

**mock_api_responses** `boolean` *(optional)* default `false`

This toggles mocking API responses, like you can in the [playground](/docs/playground/mock-api-responses).

When set to `true`, all responses from your API are mocked. This can be useful for testing purposes. Set to `false` when in production.

---

**stream** `boolean` *(optional)* default `true`

**As of public Alpha (now), only the streaming API is available, so set to `true`.**

Whether to stream the response, allowing the ‘typing’ UX seen in ChatGPT. If true, partial message chunks will be sent as they become available.

## Responses


---
### **200**

`text/event-stream`

The text stream can contain multiple chunks of JSON. Each chunk is prepended with the string `"DATA: "`, meaning splitting the string returned by this string gets an array of JSON objects.

Those JSON objects have the following format:

**id** *number*

The conversation id. Required to make further requests in the same conversation.

**role**: `"assistant" | "function" | "debug" | "error" | "confirmation"`

This is the type of message you're receiving.

`"assistant"` messages contain text written by the LLM.
    
`"function"` messages contain the response from calls to your API.

`"debug"` messages contain debugging information.

`"error"` messages contain error information.

`"confirmation"` messages contain information to be presented to the user when confirmation is required. Confirmation is required when the LLM suggests non-GET requests (e.g. POST, PUT, DELETE) to your API. The user must confirm the action before the LLM will call your API.

**content**: `string`

The content of the chunk of the response.

If the role is `"function"`, the content is a string in JSON format, which is the response from the action called.

If the role is `"confirmation"`, which contains a string in JSON format. It's an array of objects where each object has the name and arguments to be presented to the user.
```ts
[
    {
        name: string,
        args: { [argName: string]: string }
    },
    ...
]
```
**name**: *string (optional)*

Only present if the role is *“function”*.

**Example chunk**

```js
`DATA: {
    "id": 488,
    "role":"assistant",
    "content": "information"
}`
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