---
sidebar_position: 1
id: 'overview'
---

# Overview

Superflows works by connecting an API to a large language model. It handles the process of going from a user query about a product to having an answer given and actions taken. 

It therefore requires knowledge of the API and the ability to make API calls.

### Setup steps

The steps to getting a functional copilot for your product are: 

1. Create an account
2. Setup a project
3. Upload an API Specification
4. Connect your API
5. Test in our playground

This getting started guide will take you through these steps. 

If you would simply like to test Superflows, you can use one of the preset copilots for products like [TODO: ADD NAMES] by selecting this during the onboarding flow. 

Alternatively, you can upload an Open API Specification of your choosing and play with it in testing mode without connecting it to the API. 

In these cases where you are not configuring your own copilot, feel free to skip the requirements below and [continue to onboarding](getting-started/onboarding).

### Requirements for building a copilot

If you'd like to build your own copilot, before getting started, make sure you have the following requirements in place:

- **API specification**. The best format to use for the specification is an **Open API Specification**, a widely used open standard for API Specificiations. 
    - Full details of the format can be found here, and you can read more about how we handle this and any [errors that arise during upload here](../connecting-your-api/api-spec-requirements). 
    - If your API specification is not in this format, you can find API Specification converters online. Here are a few, though we cannot endorse them:
        - https://lucybot-inc.github.io/api-spec-converter/
        - https://openapi.tools/
        - https://tools.openapis.org/categories/converters.html

- **Open API**. In order to make requests to your API, it must be open. You will need to provide the **url where your API is hosted**, and an **API key** to give access to the API. The key is never stored in our databases. 

With these requirements in place, let's continue to onboarding.

