---
sidebar_position: 1
---

# Answers

To get Superflows to answer a question via our API, call this endpoint when a user submits a question to the AI:

POST https://dashboard.superflows.ai/api/v1/answers


### Query parameters

**user_input** *string* Required

The text typed by the user in the chat box

**conversation_id** *****uuid | null***** Required

The id returned in the previous response in this conversation. If this is the first message of the conversation, pass `null`

**********user_description** ******string******

A description of the user created by the developer.

E.g. `The user’s name is Bob. They are a customer experience manager at skynet corporation`

******************language** *string default English*

Angela will respond to the user’s request in this language.

**user_api_key** *string*

If Angela requires authentication to call your API, then include this here.

******************stream** *boolean default true*

Whether to stream the response, allowing the ‘typing’ UX seen in ChatGPT. If true, partial message chunks will be sent as they become available. ********************************Only streaming API is available, so set to `true` or leave out this parameter.**
