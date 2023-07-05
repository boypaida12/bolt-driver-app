/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TabContent from "./TabContent";

function Tabs({
  handleEmailChange,
  activeTab,
  setActiveTab,
  handlePhoneChange,
}) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="my-2 custom-button-container rounded">
        <button
          onClick={() => handleTabClick("email")}
          className={`custom-button ${activeTab === "email" ? "active" : ""}`}
        >
          <small>Email or username</small>
        </button>
        <button
          onClick={() => handleTabClick("phone")}
          className={`custom-button ${activeTab === "phone" ? "active" : ""}`}
        >
          <small>Phone number</small>
        </button>
      </div>
      <TabContent
        activeTab={activeTab}
        handleEmailChange={handleEmailChange}
        handlePhoneChange={handlePhoneChange}
      />
    </>
  );
}

export default Tabs;
