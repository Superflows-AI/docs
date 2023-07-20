---
sidebar_position: 2
pagination_next: 'getting-started/playground-testing'
pagination_prev: 'getting-started/onboarding'
---

# Build a Copilot

## 1. Requirements

If you'd like to build your own copilot, make sure you have the following requirements in place:

- **API specification**. 
    - Superflows accepts **Open API Specification** in json format, a widely used open standard for API Specificiations
    - Full details of the format can be found on our [API Spec requirements page](../connecting-your-api/api-spec-requirements). 
    - If your API specification is not in this format, you can find API Specification converters online
    - If you are unsure whether you have an API specification or what format it is in, you should contact your developer team or our support team
- **Open API**. 
    - In order to make requests to your API, it must be open. 
    - You will need to provide the **url where your API is hosted**, and an **API key** to give access to the API


## 2. API Specification upload

To configure a Superflows Copilot to your product, it needs to know which endpoints are available. Superflows achieves this by reading an API Specification. 

You can upload your API Specification on the 'Actions' tab of the Superflows Dashboard (https://dashboard.superflows.ai/actions).

You can upload your file by clicking either 'upload an OpenAPI Specification' or clicking the 'Upload' button'.

TODO: ADD ANNOTATED IMAGE

When you've uploaded your API, the different endpoints will appear on the Actions tab of the dashboard. 

They will be organised into 'tabs' depending on how your API Specification is organised. It should look something like this: 

TODO: ADD IMAGE

If you hit an error when uploading your API Specification, head to our [API Specification Requirements page](../../connecting-your-api/api-spec-requirements).


## 3. Selecting actions

After uploading your API spec you should be able to see actions in the Actions tab. 

By default, all of the 'GET' HTTP requests in your API will be selected. You can change this by clicking each individual endpoint (or 'Action' in Superflows terminology) to toggle them on or off, or in bulk by 'tab' or HTTP method.

### Number of actions selected

Superflows works best when less than 20 Actions are selected. To get started, we therefore recommend selecting a set of actions smaller than 20 that you are most interested in testing.

We are working on improving this, but more tuning of the Action descriptions in your API Spec or the description of the functionality of the copilot (coming later) may be required if you are using more than 20 actions. For many products, 20 actions is more than enough, but for some more complex products more are required, and some tuning will be needed.

### Bulk action selection

You can also change these in bulk by either the 'tab' the Actions belong to, or by the type of the HTTP request. More details about this functionality can be found on the [Configuration page of the documentation](../../category/configuration/)

For now, we'll continue to testing in the playground.
