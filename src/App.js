import React, { useEffect } from 'react'; 
import './App.css';


function App() { 
  useEffect(() => { 
    const handleMessengerLoaded = () => { 
      let greetingDisplayed = sessionStorage.getItem('greetingDisplayed') === 'true';

      if (!greetingDisplayed) { 
        const dfMessenger = document.querySelector('df-messenger'); 
        dfMessenger.renderCustomText('Greetings! As your ZOLL BILLING Assistant, Im here to provide dedicated support for any inquiries or issues you may encounter regarding help content related to ZOLL Billing. Please feel free to reach out at any time. Im readily available to assist you!', true);

        greetingDisplayed = true; 
        sessionStorage.setItem('greetingDisplayed', 'true'); 
      } 
    };

    document.addEventListener('df-messenger-loaded', handleMessengerLoaded);

    return () => { 
      document.removeEventListener('df-messenger-loaded', handleMessengerLoaded); 
    }; 
  }, []);

  return (
    <div>
      <df-messenger project-id="zobchatbot" agent-id="9d0e5422-7c6b-4e2d-83f7-00ae508e3f8e" language-code="en"
        max-query-length="-1"
        allow-feedback="all">
        <df-messenger-chat-bubble
          chat-title="ZOLL Billing-Assistan">
        </df-messenger-chat-bubble>
      </df-messenger>
    </div>
  );
}

export default App;
