---
sidebar_position: 3
---

# Creating new actions

New actions can be created manually within the [Actions page](https://dashboard.superflows.ai/actions) of the Dashboard.

These actions should reflect an endpoint in your API. If no corresponding endpoint exists in your API, this will cause errors when the Superflows assistant attempts to use this action.

To create a new action, you need to click the 'Add new' button at the bottom of a tag box. If you have no tags setup, you will need to create a tag before you can add an action. 

### Action name

The action name should match the name of the API endpoint. It is used by the Superflows assistant to make API requests. 

### Action type

Currently, only HTTP requests are accepted. We will be adding trigger callbacks and links soon. 

### Action description

This is used by the assistant to understand what an endpoint is for. Changing this description can therefore change the behaviour of the assistant. 

It's best to use simple, clear language to describe actions. The description should accurately explain what the endpoint is for. It can also be helpful to emphasise key parameters.

### Path

The path describes the location of the endpoint within your API. It should look something like this: `api/v1/customers/search`

### Method

The method defines the method of the HTTP request. You can select the appropriate HTTP method from the dropdown menu. 

### Parameters

This defines which inputs can be given to the API endpoint and how they should be formatted. The parameters required are determined by your API. 

In OpenAPI Specification format, they should look something like this:

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

Describes a single request body.

This can be set to 'null'.

If not null, the only required field is 'content'. From the OpenAPI Specification definition: 

>Defines the content of the request body. The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text

### Responses

Defines the structure of the response from your API. This should include the different response status codes and their meaning. 

Full information on the structure and formatting of response objects in OpenAPI Specifications can be found on the [OpenAPI Inititive website](https://spec.openapis.org/oas/v3.1.0#responses-object).
