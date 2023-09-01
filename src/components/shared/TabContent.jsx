/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";

function TabContent({
  activeTab,
  handleEmailChange,
  handlePhoneChange,
  handlePasswordChange,
  email,
  phone,
  password,
  setEmail,
  setPhone,
  setPassword,
  signIn,
}) {
  return (
    <>
      <div>
        {activeTab === "email" && (
          <EmailInput
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            signIn={signIn}
          />
        )}
        {activeTab === "phone" && (
          <PhoneInput handlePhoneChange={handlePhoneChange} />
        )}
      </div>
    </>
  );
}

export default TabContent;
