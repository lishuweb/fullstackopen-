```mermaid
sequenceDiagram
    Actor User

    User->>Browser: Goes to spa page
    Browser->>Server: Fetch spa.html
    Note right of Browser: GET request
    Server->>Browser: Provide spa.html
    Browser->>Server: Fetch main.css
    Note right of Browser: GET request
    Server->>Browser: Provide main.css
    Browser->>Server: Fetch spa.js
    Note right of Browser: GET request
    Server->>Browser: Provide spa.js
    Browser->>User: Render HTML and CSS
    Browser->>Server: Fetch data.json
    Note right of Browser: AJAX request
    Server->>Browser: Provide data.json
    Browser->>User: Render notes as HTML list
```