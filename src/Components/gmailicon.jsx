import React from "react";


const GmailIcon = (props) => {
    const {history} = props;
  
    const composeEmail = () => {
      const emailAddress = 'keshuuu550@gmail.com'; // Replace with your actual email address
      window.location.href = 'mailto:' + emailAddress;
    };
  
    return (
      <div className="gmail-icon" onClick={composeEmail}>
        <img src="./images/gmailicon.png " alt="Gmail Icon" />
      </div>
    );
  };
  
  export default GmailIcon;