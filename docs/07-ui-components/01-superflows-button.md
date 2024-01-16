---
sidebar_position: 1
pagination_next: "ui-components/chat"
---

# Superflows Button

The `SuperflowsButton` React component is a button which open a Superflows chatbot as either a sidebar or modal.

![Superflows-button](../../static/img/docs/ui-components/superflows-button.png)

It can be imported with:

```jsx
import { SuperflowsButton } from "@superflows/chat-ui-react";
```

---

## Properties

---

**superflowsApiKey** `string` _Required_

The API key for your Superflows account. It starts `sfk-`. You can find this in the [**Superflows dashboard**](https://dashboard.superflows.ai/api-settings).

---

**superflowsUrl** `string`

The URL of the Superflows deployment. This defaults to the cloud deployment, but if you're self-hosting, or connecting to a local deployment, you'll need to change this.

---

**AIname** `string`

The name of the AI shown in the sidebar window. It doesn't affect the behaviour of the AI.

---

**userApiKey** `string`

The API key for the user to access your API.

Superflows calls your API to answer questions for your user. As a result, this is required if your API requires an API key to access it. This is never stored on our servers or in our databases.

---

**userDescription** `string`

With each API request, you can provide a description of the user who is asking the question, any useful information for accessing your API (e.g. user id) and instructions on how to address them.

---

**suggestions** `string[]`

An array of suggestions to show in the sidebar. These are shown as buttons, and when clicked, the user input is set to the text of the button.

---

**welcomeText** `string`

Welcome text to be displayed to the user from the assistant. When set it will appear as though the chat assistant has written this message. For example, "Hi, welcome to Acme AI, how may I help you today?"

---

**api_params** `type below` _(optional)_ default `true`

This enables API-specific information to be set in code. This allows multi-tenant hosting (i.e. changing the hostname of the API depending on the customer/user), and setting headers in API calls through code.

This is an array of objects, each object corresponding to an API that Superflows needs access to. These APIs  must first be added to the Superflows dashboard.

Each object consists of:
- **name** `string` _Required_

    The name of the API. This is used to identify the API. Must match the API name in the [Superflows dashboard](https://dashboard.superflows.ai/actions).


- **hostname** `string` _(optional)_

  This overrides the hostname of the API. This allows multi-tenant hosting: changing this value based on which customer is logged in allows you to route requests to the correct API host.

    E.g. Customer 1 has hostname https://c1.api.com and customer 2 has hostname https://c2.api.com. When customer 1 is logged in, the hostname is set to https://c1.api.com, and all requests are sent to that.


- **headers** `{ [headerName: string]: string }` _(optional)_

    The headers to be sent with all requests made to this API. This allows customer-specific headers to be set in code.

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

**mockApiResponses** `boolean`

This toggles mocking API responses, like you can in the [playground](/docs/playground/mock-api-responses).

When set to `true`, all responses from your API are mocked. This can be useful for testing purposes. Set to `false` when in production.

---

**styling**
```
{
  type?: "modal" | "sidebar";
  solidIcon?: boolean;
  slideoverSide?: "right" | "left";
  buttonColor?: string;
  headerBackgroundColor?: string;
  headerTextColor?: string;
}
```

This allows you to set basic aspects of the style of the Superflows sidebar. This will be expanded to allow much deeper customization in the future.

`type` sets whether the Superflows chat opens as a modal or a sidebar. This is set to `modal` by default.

`solidIcon` sets whether the icon is solid or outlined. This is set to `false` by default.

`slideoverSide` sets which side of the screen the sidebar opens on. Set "right" if you want it to open on the right hand side of the screen.

`buttonColor` sets the colour of the submit button.

`headerBackgroundColor` sets the colour of the header of the sidebar.

`headerTextColor` sets the colour of the text on the header of the sidebar.

---

**devMode** `boolean`

This enables [**developer mode**](./docs/playground/developer-mode). This is useful for debugging, but should always be set to `false` in production.

---

**buttonStyling** `string`

This allows you to set the class name of the button. This allows you to style the button however you like.

(note: if you set this, you must set the height and width of the button in the classes)

---

**initialMessage** `string`

An initial message to "pre-prompt" the AI. When set, on page load this message is programmatically sent to the AI as though the user entered the text into the chat window. Both the initial message and the response from the AI will be visible to the user in the chat window.

(note: this message is sent regardless of whether the sidebar is open)

---
