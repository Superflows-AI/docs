---
sidebar_position: 2
---

# Authentication

You need to authenticate using an `Authorization: Bearer` header. You can find your API token on the [API settings page](https://dashboard.superflows.ai/api-settings).

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
