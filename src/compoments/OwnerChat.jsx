import React from "react";
import { ChatEngine } from "react-chat-engine";

function OwnerChat() {
  return <ChatEngine projectID={import.meta.env.VITE_REACT_APP_CE_PROJECT_ID} userName={import.meta.env.VITE_OWNER_CHAT_USER_NAME} userSecret={import.meta.env.VITE_OWNER_CHAT_USER_PASS} renderNewChatForm={() => <div></div>} />;
}

export default OwnerChat;
