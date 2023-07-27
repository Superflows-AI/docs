---
sidebar_position: 2
---

# Developer mode

Developer modes enables you to see the thought process and API calls the assistant performed to arrive at it's answer. This is useful when checking whether the assistant is functioning properly and debugging performance issues.

It can be toggled in the top left corner of the Playground. 

![Test-mode-playground-image](../../static/img/docs/playground/developer-mode/dev-mode.png)

In developer mode, a typical output will show:
- Reasoning
    - More-or-less "what the AI is thinking": understanding what the user wants and how it might achieve this
- Plan
    - A more concrete plan of a series of steps that will be required to action this request
- Commands
    - Shows the API calls the assistant will make to get the information required
- Tell user
    - The output of the plan and command steps processed into a chat output to send to the user

The following example illustrates how this can be used for debugging purposes to update the configuration parameters of your AI assistant.

:::info

### Example: Incorrect Reasoning

Suppose you're building an assistant for a CRM and you ask in the playground `"Who is leading the deal with Acme?"`.

Given your knowledge of your API, you expect it to find the `company` called Acme and then get the `opportunity` associated with that company's ID.

It responds with:

```text
Reasoning: The user wants to know who is leading the deal with Acme.
I should first get the opportuntity called "Acme". 

Plan:
- Get opportunity called "Acme"
- Get owner of opportunity

...
```

The plan follows the reasoning (as you would hope), but the reasoning is flawed.

The issue is the assistant doesn't know that it can't directly query the opportunities endpoint with the name of the company. It needs to first get the company ID and then query the opportunities endpoint with that ID.

This could be rectified by adding clearer descriptions of each endpoint and the parameters it accepts.

E.g. On the opportunities endpoint, add a description of "Requires company ID".
:::