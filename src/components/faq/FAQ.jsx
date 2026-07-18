import React, { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "What can I do on SOZO?",
    answer:
      "Join faith communities, journal your spiritual journey, read a daily verse, pray with others, and attend gatherings—your whole walk with God in one place.",
  },
  {
    question: "How are communities moderated?",
    answer:
      "Communities are moderated by their leaders and supported by SOZO's community guidelines to ensure a safe and encouraging environment.",
  },
  {
    question: "How do I get my church on SOZO?",
    answer:
      "Create a community and submit your church for verification. Once approved, you'll receive access to church management features.",
  },
  {
    question: "Can I invite my friends?",
    answer:
      "Yes. You can invite friends and family to join your community through shareable links and invitations.",
  },
  {
    question: "Is SOZO free?",
    answer:
      "Yes. SOZO is free to use. Premium features for churches, creators, and organizations are available through optional subscriptions.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-right ${open ? "open" : ""}`}>
    <div
      className="faq-right-title"
      onClick={() => setOpen(!open)}
    >
      <h1>{question}</h1>
  
      <div className={`faq-right-button ${open ? "open" : ""}`}>
        {open ? "−" : "+"}
      </div>
    </div>
  
    <div className={`faq-answer ${open ? "open" : ""}`}>
      <p>{answer}</p>
    </div>
  </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-left">
        <p style={{ fontWeight: "bold" }}>FAQs</p>

        <h3>
          Frequently Asked
          <br />
          Questions
        </h3>

        <p>
          Have a question? Find our most commonly asked questions below—and if
          it's not here, our team is one tap away.
        </p>
      </div>

      <div className="faq-right-container">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;