---
sidebar_position: 1
pagination_next: "api-gateway/how-to"
---

# What is a Superflows API Gateway?

For high security applications, building an API Gateway to protect your Superflows API key from users may be desirable.

A Superflows API Gateway has the sole purpose of protecting your Superflows API key from users.

:::tip
**Building an API Gateway is not necessary for most applications**. Users gaining access to your Superflows API key gives them access to a chatbot which only works in the presence of a valid API key to your API.

Their access to data is limited to the access given to the API key they already have.

Only consider building an API Gateway for Superflows if you're certain it is necessary.
:::

It is a server that sits between your users and the Superflows API. It is responsible for authenticating users and forwarding valid requests to the Superflows API.

## Why use a Superflows API Gateway?

You may want to hide the Superflows API key to make sure you are following a specified security certification.