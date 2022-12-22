import React from "react";

export const IconButton = ({ icon, content }) => {
  return (
    <div className="button_container">
      <div className="button_icon">{icon}</div>
      <div className="button_content">{content}</div>
    </div>
  );
};
