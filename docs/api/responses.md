---
sidebar_position: 3
---

# Responses


---
### **200**
    
**id** *uuid*

The conversation id. Required to make further requests in the same conversation.

**role**: *“assistant” | “function” | “debug” | “error”*

**content**: *string*

The content of the chunk of the response. If the role is ***********“function”***********, the content is a string in JSON format, which is the response from the action called.

**name**: *string (optional)*

Only present if the role is *“function”*.

**Example chunk**

```jsx
{"id":488,"role":"assistant","content":"information"}
```

---

### **400**
    
    Invalid request body | No API host found - add an API host on the API settings page
    
---

### **401**
    
    Authentication failed

---

### **404**
    
    No active actions found

---

### **405**
    
    Only POST requests allowed

---

### **500**
    
    Internal Server Error

---

### **501**
    
    Currently only the streaming API (stream=true) has been implemented. 