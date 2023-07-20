---
sidebar_position: 1
---

# Selecting Actions

After uploading your API spec, by default all of the 'GET' HTTP requests in your API will be selected. 

You can change this by clicking each individual endpoint (or 'Action' in Superflows terminology) to toggle them on or off, or in bulk by 'tab' or HTTP method.

## Number of actions selected

Superflows works best when less than 20 Actions are selected. We recommend getting started by selecting a set of actions smaller than 20 that you are most interested in testing.

If you require more than 20 actions selected and see performance issues, you can tune the behaviour of the assistant by changing [Action Descriptions](./action-descriptions), [User Descriptions](./user-description), and [Project Description](../project/project-description).

## Bulk action selection

You can select or deselect actions in bulk. This can be done by the 'tab' the Actions belong to, or by the type of the HTTP request. 

NOTE: When you deselect or select a group of actions in bulk, the memory of which Actions were previously selected is currently not persisted. If you have configured a large number of actions, be careful when bulk selecting or deselecting groups of actions.

### Bulk selection by Tab

To bulk change the Actions by their 'tab', navigate to the tab, and click tick on the top left hand corner of the box. This will either activate or deactivate all actions within that tab, depending on it's current state. 

### Bulk selection by HTTP method

To bulk change actions by their HTTP request type, navigate to the top of the Actions page, and use the 'Enable HTTP method' dropdown menu. Here you can select or deselect all Actions that correspond to that HTTP method. The behaviour is similar to bulk selecting or deselecting actions by tab. 
