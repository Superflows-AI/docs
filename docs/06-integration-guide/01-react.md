---
sidebar_position: 2
pagination_next: 'ui-components/superflows-button'
---

# React Integration Guide

First, you need to install the `chat-ui-react` package:

```shell
npm install @superflows/chat-ui-react
```

Then, you have 2 options for inserting the Superflows sidebar.

### Method 1: Use the `SuperflowsButton` component (recommended)

This adds a button which opens the sidebar:

![Superflows-button](../../static/img/docs/ui-components/superflows-button.png)

(note: This button can be styled using the `buttonStyling` property, which takes a string of class names.)

You can import the `SuperflowsButton` component and use it in your app:

Guidance on how to set the properties of the `SuperflowsButton` component [**can be found here**](./docs/ui-components).

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

You'll need to set your `NEXT_PUBLIC_SUPERFLOWS_API_KEY` environment variable for the above to work. Set it to your API key, which you can find in the [**Superflows dashboard**](https://dashboard.superflows.ai/api-settings).

:::tip
With either approach, you can set `mockApiResponses` to `true` to mock API responses. This enables you to evaluate the assistant works without you needing to connect to your API.
:::

That should be you all set up! Please tell us if this doesn't work (on [**Github**](https://github.com/Superflows-AI/superflows/issues/new) or [**Slack**](https://join.slack.com/t/superflowsusers/shared_invite/zt-1z8ls9rp3-bSohOrMKOsX8zJOUcDy07g).)

### Method 2: Use the `SuperflowsSidebar` component

This approach is more flexible, but requires you to add your own button to open the sidebar. It:
1. Gives you full control over the button that opens the sidebar
2. Requires you to handle the state of the sidebar (whether it is open or closed) yourself

Here's a minimal code snippet, which adds a button (which you can set up exactly how you like) which :

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
        userDescription="..."
        userApiKey={"..."}
        AIname={"..."}
        styling={{...}}
      />
    </>
  )
}
```

That should be you done! Please tell us if this doesn't work (on [**Github**](https://github.com/Superflows-AI/superflows/issues/new) or [**Slack**](https://join.slack.com/t/superflowsusers/shared_invite/zt-1z8ls9rp3-bSohOrMKOsX8zJOUcDy07g).)
