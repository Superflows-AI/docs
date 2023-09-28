---
sidebar_position: 7
pagination_next: "configuration/action-descriptions"
---

# Connecting to your API

Since Superflows calls your API to respond to user questions, it needs to be able to access your API.

## API Host

Superflows needs to know your API hostname. This is set in the '[Project](https://dashboard.superflows.ai/project)' tab of the Dashboard in the 'API Settings' section:

`Dashboard / Project / API Settings / API Host`

![api-settings](../../static/img/docs/connecting-your-api/api-host/1-api-settings.png)

The API host is the url where your API is hosted. It should start with `https://`.

## Authentication

To authenticate to your API, Superflows needs to correctly use your API key when making the requests.

Superflows needs 2 things:

1. **Where to set the API key** (usually a header): this is set in the dashboard 
2. **Your API key**: this is sent in each request and never stored by Superflows.\* When using the frontend components, you set it in the `userApiKey` and in the Playground you set it in the bottom right corner.

Authentication configuration can be found in the Actions page of the Dashboard, on the modal visible when clicking the cog on the API tab. There are two dropdown menus which show the accepted Authentication schemes.

The left-hand menu defines the header used. The right-hand menu defines the authentication scheme used. This is optional and can be set to `None` if necessary.

\*Note: Even though it is never stored, you may not be happy sending your API key to Superflows. If this is the case, you can self-host, so your API key never leaves a server hosted by you. Read the [self-hosting guide](/docs/self-hosting) to understand how to self-host.
