---
sidebar_position: 3
---

# Creating New Actions

New actions can be created manually within the [Actions page](https://dashboard.superflows.ai/actions) of the Dashboard.

These actions should reflect an endpoint in your API. If no corresponding endpoint exists in your API, this will cause errors when the Superflows assistant attempts to use this action.

To create a new action, you need to click the 'Add new' button at the bottom of a tag box. If you have no tags setup, you will need to create a tag before you can add an action. 

### Action name

The action name should accurately represent what the endpoint does. It is used by the Superflows assistant to make API requests. 

### Action type

Currently, only HTTP requests are accepted. We will be adding trigger callbacks and links soon. 

### Action description

This is used by the assistant to understand what an endpoint is for. Changing this description can therefore change the behaviour of the assistant. 

It's best to use simple, clear language to describe actions. The description should accurately explain what the endpoint is for. It can also be helpful to emphasise key parameters if there are a large number of parameters for an endpoint. 

### Path

The path describes the location of the endpoint within your API. It should look something like this: `/api/v1/customers/search` - it should start with a `/`.

### Method

The method defines the HTTP request method. 

### Parameters

The 'parameters' are all parameters to the endpoint excluding the body of the request (in non-GET requests).

[**Full specification here**](https://swagger.io/specification/#parameter-object).

These can be `"in"` the path, query, header or cookie. 

In OpenAPI Specification format, they should look like this:

```
[
  {
    "name": "name",
    "in": "query",
    "schema": {
      "type": "string"
    }
  }
]
```

### Request body contents

Describes a single request body. This can be set to `null` where no request body is passed (e.g. all GET requests).

[**Full specification here**](https://swagger.io/specification/#request-body-object).

If not null, it should look roughly like below:

```json
{
  "content": {
    "application/json": {
      "schema": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "property2": {
            "type": "integer"
          },
          ...
        }
      }
    }
  }
}
```

### Responses

Defines the structure of the response from your API. This should include the different response status codes and their meaning. 

[**Full specification here**](https://spec.openapis.org/oas/v3.1.0#responses-object).

An example is below:

```json
{
  "200": {
    "description": "List of organizations",
    "content": {
      "application/json": {
        "schema": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "property2": {
                "type": "integer"
              },
              ...
            }
          }
        }
      }
    }
  }
}
```
