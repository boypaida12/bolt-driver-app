/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import EmailInput from './EmailInput'
import PhoneInput from './PhoneInput'

function TabContent({activeTab, handleEmailChange, handlePhoneChange}) {
  return (
    <>
    <div>
        {activeTab === "email" && <EmailInput handleEmailChange={handleEmailChange} />}
        {activeTab === "phone" && <PhoneInput handlePhoneChange={handlePhoneChange}/>}
      </div>
    </>
  )
}

export default TabContent