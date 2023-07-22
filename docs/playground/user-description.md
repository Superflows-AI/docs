---
sidebar_position: 3
---

# User description

The Dser Description allows you to tune the behaviour of the Superflows assistant to each user. The user description takes the form of a text description, input to the API as a string, or to the Playground in the text entry field on the left hand side of the page.

When adjusting the user description in the playground, the changes made do not persist to answers from the API. You will need to add this User Description to the API call. 

You should consider the user description as a place to put important information about the user. This may include information for retrieving the appropriate information from their account, such as a User ID. Information of this kind that is common across lots of calls to your API should be included here.

It could also provide advice to the AI about how to address them. For example, some users may prefer answers that are descriptive, and others may prefer answers that are more statistical. 

This information is added to the prompt we send to the Large Language Model (LLM) processing the query. The LLM then uses this information to produce the output, including using information like the User ID to make calls to your API appropriately. 