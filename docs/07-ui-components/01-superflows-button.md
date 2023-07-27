---
sidebar_position: 1
pagination_next: 'ui-components/superflows-sidebar'
---

# Superflows Button

The `SuperflowsButton` React component is a button which opens the Superflows sidebar.

![Superflows-button](../../static/img/docs/ui-components/superflows-button.png)

It can be imported with:

```jsx
import { SuperflowsButton } from "@superflows/chat-ui-react";
```
----

## Properties
---

**superflowsApiKey** `string` *Required*

The API key for your Superflows account. It starts `sfk-`. You can find this in the [**Superflows dashboard**](https://dashboard.superflows.ai/api-settings).

---

**userApiKey** `string` *Required*

The API key for the user to access your API.

Superflows calls your API to answer questions for your user. As a result, this is required if your API requires an API key to access it. This is never stored on our servers or in our databases.

---

**hostname** `string`

The hostname of the Superflows deployment. This defaults to the cloud deployment, but if you're self-hosting, or connecting to a local deployment, you'll need to change this.

---

**userDescription** `string`

With each API request, you can provide a description of the user who is asking the question, any useful information for accessing your API (e.g. user id) and instructions on how to address them.

---

**suggestions** `string[]`

An array of suggestions to show in the sidebar. These are shown as buttons, and when clicked, the user input is set to the text of the button.

---

**AIname** `string`

The name of the AI shown in the sidebar window. It doesn't affect the behaviour of the AI.

---

**styling** `{brandColor?: string; slideoverSide?: "right" | "left"; sidebarHeaderTextColor?: "dark" | "light"}`

This allows you to set basic aspects of the style of the Superflows sidebar. This will be expanded to allow much deeper customization in the future.

The `brandColor` sets the colour of the sidebar header and the button.

The `slideoverSide` sets which side of the screen the sidebar opens on. Set "right" if you want it to open on the right hand side of the screen.

The `sidebarHeaderTextColor` sets the colour of the text on the header of the react. Set "dark" if using a white background

---

**buttonStyling** `string`

This allows you to set the class name of the button. This allows you to style the button however you like.

(note: if you set this, you must set the height and width of the button in the classes)

---

**mockApiResponses** `boolean`

This toggles mocking API responses, like you can in the [playground](/docs/playground/mock-api-responses).

When set to `true`, all responses from your API are mocked. This can be useful for testing purposes. Set to `false` when in production.

---

**devMode** `boolean`

This enables [**developer mode**](./docs/playground/developer-mode). This is useful for debugging, but should always be set to `false` in production.

---

