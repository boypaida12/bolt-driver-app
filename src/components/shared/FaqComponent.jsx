/* eslint-disable no-unused-vars */
import React from "react";
import FaqCard from "./FaqCard";

const faqData = [
  {
    question: `Q: I don't drive full-time. Can I use Bolt for just a few hours a week?`,
    answer: `A: Of course, some of our drivers are only active a few hours during weekends and make solid part-time income.`,
  },
  {
    question: `Q: How do I get paid?`,
    answer: `A: Clients pay you in cash or via Bolt. We pay out to your bank account every week.`,
  },
  {
    question: `Q: How much do I pay Bolt?`,
    answer: `A: We do not have any monthly fees, so you only pay for finished trips. We usually ask for 10% to 20% of the ride fee, depending on your city. You can get more information by contacting us.`,
  },
  {
    question: `Q: How long does it take to sign up?`,
    answer: `A: Submitting your information takes just 5 minutes. Following that, depending on the local office, you may receive a 30 minute in-person training. In some cities, we will accept your application remotely once you provide us with all the necessary documents.`,
  },
  {
    question: `Q: What if I don't have a smartphone?`,
    answer: `A: Our city teams suggest you a budget Android smartphone that you can buy or finance.`,
  },
  {
    question: `Q: What if I don't have a vehicle?`,
    answer: `A: Our city teams can help you match with our partner fleets or rental companies who offer competitive rates on vehicles that are accepted on our platform. In some cities, longer term drivers can get financing deals from our partners.`,
  },
];

function FaqComponent() {
  return (
    <>
      <div className="mx-md-5 mt-4" style={{ paddingInline: 15 }}>
        {faqData.map((data, index) => (
          <FaqCard key={index} question={data.question} answer={data.answer} />
        ))}
        <a href="/" style={{ color: "#40df6d" }}>
          <small className="fw-semibold">
            Check our Knowledgebase for more info.
          </small>
        </a>
      </div>
    </>
  );
}

export default FaqComponent;
