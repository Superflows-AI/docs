---
sidebar_position: 1
---

# API Spec upload

To configure a Superflows Copilot to your product, it needs to know which endpoints are available. Superflows achieves this by reading an API Specification. 

If you are testing with a preconfigured copilot, continue to the selecting [actions page](./action-selection) of this Getting Started flow.

Advanced users can also configure an API specification directly within the Actions page by manually adding Actions. However, this is likely to be labourious, and this functionality is intended mostly for adding to and editing existing API specifications that have been uploaded.

### API Specification requirements

Superflows only accepts API specs in the Open API Specification format. You can read more about that on our [API Specification documentation page](../../api-spec-requirements). 

This file should be a .json. If you have an Open API Specification that is not a .json, you should be able to convert this using an online file converter.

### Uploading your API Specification

To upload your API Specification, go to the 'Actions' tab on the Superflows Dashboard (https://dashboard.superflows.ai/actions).

Here you will see a page that looks like the image below, unless you or someone in your organisation has previously uploaded an API Spec.

You can upload your file by clicking either 'upload an OpenAPI Specification' or clicking the 'Upload' button'.

TODO: ADD ANNOTATED IMAGE

When you've uploaded your API, the different endpoints will appear on the Actions tab of the dashboard. They will be organised into 'tabs' depending on how your API Specification is organised. It should look something like this: 

TODO: ADD IMAGE
