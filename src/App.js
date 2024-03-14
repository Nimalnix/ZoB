import React from 'react';
import './App.css';

 
function App() {
  return (
<div>
<link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
<script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
<df-messenger
        project-id="zobchatbot"
        agent-id="9d0e5422-7c6b-4e2d-83f7-00ae508e3f8e"
        language-code="en"
        max-query-length="-1"
        allow-feedback="all">
<df-messenger-chat-bubble
          chat-title="Billing agent">
</df-messenger-chat-bubble>
</df-messenger>
</div>
  );
}
 
export default App;