---
sidebar_position: 5
---

# User Description

The User Description allows you to tune the behaviour of the Superflows assistant to each user. It takes the form of a text description, input to the API as a string, or to the Playground in the text entry field on the left hand side of the page.

You should consider the user description as a place to put important information about the user. This may include information for retrieving the appropriate information from their account, such as a User ID. 

It could also provide advice to the AI about how to address them. For example, some users may prefer answers that are descriptive, and others may prefer answers that are more statistical. 

This information is added to the prompt we send to the Large Language Model (LLM) processing the query. The LLM then uses this information to produce the output, including using information like the User ID to make calls to your API appropriately. 
