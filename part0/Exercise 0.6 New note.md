<h1>0.6: New note in Single page app diagram</h1>

Sequence diagram depicting the situation where the user creates a new note using the single-page version of the app.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    
    Note right of browser: Sends user input to server as JSON. Initiates POST request

    server->>browser: Sends reponse to the browser
```