import React from 'react'
import "./message.style.css"
import { FcCheckmark } from "react-icons/fc";
import { FcDisclaimer } from "react-icons/fc";
import { FcAdvertising as InfoIcvon } from "react-icons/fc";

const Message = ({ type, children }) => {

    const showIcon = () => {
        switch (type) {
            case "error":
                return <FcDisclaimer />;
            case "success":
                return <FcCheckmark />;
            case "info":
                return <InfoIcvon />;
            default:
                break;
        }
    }
    


  return (
      <div className={`message-container ${type}`}>
          {showIcon()}
          <p > {children}</p>
    </div>
  )
}

export default Message