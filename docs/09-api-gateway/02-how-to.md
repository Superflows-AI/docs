---
sidebar_position: 2
---

# How to build a Superflows API Gateway

Supposing you are hosting your API Gateway on the following URL: `https://api-gateway.example.com`, you will need to set the [`superflowsUrl` parameter](https://docs.superflows.ai/docs/ui-components/superflows-button#:~:text=Superflows%20dashboard.-,superflowsUrl,-string) of the frontend component to this URL.

There are 3 endpoints you need to build:

1. `POST https://api-gateway.example.com/api/v1/feedback`
2. `POST https://api-gateway.example.com/api/v1/follow-ups`
3. `POST https://api-gateway.example.com/api/v1/answers`

In each case, the frontend components will send requests to these endpoints, which will then forward the requests to the Superflows API, with the Superflows API key added.

The first two (`/api/v1/feedback` and `/api/v1/follow-ups`) are standard HTTP POST requests.

The third (`/api/v1/answers`) is a streaming endpoint, that requires you to stream response tokens back to Superflows chunk by chunk.

The code you write is highly framework-specific, so we don't go into those details here. However, we can provide some general guidance.

## Frontend Parameters

You need to set the following 2 frontend parameters:

1. Set the [`superflowsUrl` parameter](https://docs.superflows.ai/docs/ui-components/superflows-button#:~:text=Superflows%20dashboard.-,superflowsUrl,-string) to the API Gateway base url (e.g. `https://api-gateway.example.com`).
2. Set the [`superflowsApiKey` parameter](https://docs.superflows.ai/docs/ui-components/superflows-button#:~:text=Superflows%20dashboard.-,superflowsApiKey,-string) to an empty string `""`.

This will make the frontend components send requests to the API Gateway, with the Superflows API key missing. Next, we need to build the API Gateway endpoints themselves, which will then forward the requests to the Superflows API before returning the response to the frontend.

## Authentication

For each endpoint in the API Gateway, when sending requests to the Superflows API, you need to authenticate using an `Authorization: Bearer` header.

You can find your API token on the [API settings page](https://dashboard.superflows.ai/api-settings). It starts `sfk-*`. This is the key you're hiding by using this API Gateway.

## Sending requests to the Superflows API

All 3 endpoints in the API Gateway should be POST requests. You need to send 2 headers with each request:

1. `Content-type: application/json`
2. `Authorization: Bearer <Your-Superflows-API-key>`

The request body should be identical to the request body sent to the API Gateway endpoint by the frontend.

### Example request

```
curl -X POST 'https://dashboard.superflows.ai/api/v1/answers' \\
-H 'Content-type: application/json' \\
-H 'Authorization: Bearer <Your-Superflows-API-key>' \\
-d '{
  "user_input": "Hello!",
  "conversation_id": null,
  "user_api_key": "<Your-Software's-API-key>",
  "user_description": "<Text containing any user-specific parameters the AI will need to know>"
}'
```

## Streaming responses

The `/api/v1/answers` endpoint is a streaming endpoint. This means that you need to stream the response tokens back to Superflows chunk by chunk.

Setup here will be more challenging than a simple HTTP response. If you're having trouble, don't hesitate to reach out to [Henry](mailto:henry@superflows.ai) for help.
