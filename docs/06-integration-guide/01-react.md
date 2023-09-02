---
sidebar_position: 2
pagination_next: "ui-components/superflows-button"
---

# React Integration Guide

First, you need to install the `chat-ui-react` package:

```shell
npm install @superflows/chat-ui-react
```

Then, you have 3 options for adding a Superflows chatbot to your software:

|   | Approach                                     | Description                                                                        |
|---|----------------------------------------------|------------------------------------------------------------------------------------|
| 1 | `SuperflowsButton` component _(recommended)_ | Easiest & fastest                                                                  |
| 2 | `SuperflowsChat` component                   | Most flexible & customizable                                                       |
| 3 | The modal or sidebar components              | (1 but you can change the button & control opening/closing the chatbot)            |

### Method 1: Use the `SuperflowsButton` component (recommended)

This adds a button which opens the chatbot as either a modal or sidebar:

![Superflows-button](../../static/img/docs/ui-components/superflows-button.png)

(note: This button can be styled using the `buttonStyling` property or `solidIcon` for the icon to be solid instead of an outline, which takes a string of class names.)

You can import the `SuperflowsButton` component and use it in your app:

```jsx
import { SuperflowsButton } from '@superflows/chat-ui-react';

export default function App() {
  return (
    <SuperflowsButton
        superflowsApiKey={process.env.NEXT_PUBLIC_SUPERFLOWS_API_KEY}
        userDescription="..."
        userApiKey={"..."}
        AIname={"..."}
        styling={{...}}
        buttonStyling={"class-name ..."}
    />
  )
}
```

Guidance on how to set the properties of the `SuperflowsButton` component [**can be found here**](../ui-components/superflows-button).

You'll need to set your `NEXT_PUBLIC_SUPERFLOWS_API_KEY` environment variable in the above snippet. Set it to your Superflows API key, which you can find in the [**Superflows dashboard**](https://dashboard.superflows.ai/api-settings).

:::tip
With either approach, you can set `mockApiResponses` to `true` to mock API responses. This enables you to evaluate the assistant works without you needing to connect to your API.
:::

That should be you all set up! Please tell us if this doesn't work (on [**Github**](https://github.com/Superflows-AI/superflows/issues/new) or [**Slack**](https://join.slack.com/t/superflowsusers/shared_invite/zt-1z8ls9rp3-bSohOrMKOsX8zJOUcDy07g).)

### Method 2: Chat component

This is the most flexible approach.

The `SuperflowsChat` component consists of the scrolling chat window, the input box, and the submit, cancel and 'clear chat' buttons.

Here's a minimal code snippet for the chat component:

```jsx
import { SuperflowsChat } from '@superflows/chat-ui-react';

export default function YourPage() {
  return (
    <main>
      {/* YOUR PAGE */}
      <SuperflowsChat
        superflowsApiKey={process.env.NEXT_PUBLIC_SUPERFLOWS_API_KEY}
        userDescription={"..."}
        userApiKey={"..."}
        AIname={"..."}
        styling={{...}}
      />
    </>
  )
}
```

That should be you done! Please tell us if this doesn't work (on [**Github**](https://github.com/Superflows-AI/superflows/issues/new) or [**Slack**](https://join.slack.com/t/superflowsusers/shared_invite/zt-1z8ls9rp3-bSohOrMKOsX8zJOUcDy07g).)


### Method 3: Use either the `SuperflowsSidebar` or `SuperflowsModal` components

This allows you to use the same components that Method 1 allows you to, only it:

1. Gives you full control over the button that opens the sidebar
2. Requires you to handle the state of the sidebar (whether it is open or closed) yourself

Here's a minimal code snippet for the sidebar, which adds a button (which you can set up exactly how you like) which :

```jsx
import { SuperflowsSidebar } from '@superflows/chat-ui-react';

export default function YourButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="..."
        onClick={() => setIsOpen(true)}
      >
          Click me to open/close Superflows
      </button>
      <SuperflowsSidebar
        open={isOpen}
        setOpen={setIsOpen}
        superflowsApiKey={process.env.NEXT_PUBLIC_SUPERFLOWS_API_KEY}
        userDescription={"..."}
        userApiKey={"..."}
        AIname={"..."}
        styling={{...}}
      />
    </>
  )
}
```

That should be you done! Please tell us if this doesn't work (on [**Github**](https://github.com/Superflows-AI/superflows/issues/new) or [**Slack**](https://join.slack.com/t/superflowsusers/shared_invite/zt-1z8ls9rp3-bSohOrMKOsX8zJOUcDy07g).)
