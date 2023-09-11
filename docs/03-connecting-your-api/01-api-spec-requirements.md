---
sidebar_position: 1
pagination_next: "connecting-your-api/api-spec-requirements"
---

# API Spec Requirements

Superflows accepts the open standard '[OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0)' to read API Specifications.

Versions 3.0+ are accepted. If you have a version 2.X OpenAPI specification, you can [**convert it here**](https://stackoverflow.com/questions/59749513/how-to-convert-openapi-2-0-to-openapi-3-0).

OpenAPI specifications can be uploaded in `.json`, `.yaml` or `.txt` formats.

:::important
We currently don't support `allOf`, `anyOf` or `oneOf` keywords in the OpenAPI specification schemas. If you use these, please [contact us](mailto:henry@superflows.ai?cc=matthew@superflows.ai,james@superflows.ai&subject=Want+to+use+allOf%2FanyOf%2FallOf+in+OpenAPI&body=Hi%20Henry%2C%0A%0AI%27m%20from%20%3CCOMPANY%20NAME%3E%20and%20I%27d%20like%20to%20use%20Superflows%2C%20but%20our%20OpenAPI%20specification%20contains%20allOf%2FanyOf%2FoneOf%20%28DELETE%20AS%20APPROPRIATE%29.%0A%0AAll%20the%20best%2C%0A%3CYOUR%20NAME%3E). 
:::

### About OpenAPI Specifications

OpenAPI Specifications are an open industry standard for defining APIs. A full definition and description can be found on the [OpenAPI Initiative website](https://spec.openapis.org/oas/v3.1.0).

The initiatives website describes the specification format as follows:

> \*The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for HTTP APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic.
>
> When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OpenAPI Specification removes guesswork in calling a service.

If you do not use OpenAPI Specifications, please [contact us](https://join.slack.com/t/superflowsusers/shared_invite/zt-1zf93teqq-0I9H_niiGruVDPFVSzGj9w).
