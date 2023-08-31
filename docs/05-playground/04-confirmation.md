---
sidebar_position: 4
---

# Confirmation

Superflows will be able to make changes in the connected account via non-`GET` requests (e.g. `PUT`, `POST`).

To prevent Superflows making unwanted changes, all non-`GET` actions require user confirmation.

Every time Superflows attempts to make a request like this in the playground, you will be prompted for confirmation. Superflows will provide details of the request being made so you can make sure it's safe.

![Confirmation check](../../static/img/docs/playground/confirmation/confirmation-check.png)
