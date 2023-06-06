import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Answer, FAQContainer, FAQItem, FAQTitle, Question } from "./Faq.styled";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "What is a crypto wallet?",
      answer:
        "A crypto wallet is a digital application that allows you to securely store, manage, and transfer your cryptocurrencies.",
    },
    {
      id: 2,
      question: "Is my crypto wallet secure?",
      answer:
        "Yes, we prioritize security in our crypto wallet application. We employ robust encryption techniques and follow industry best practices to protect your funds.",
    },
    {
      id: 3,
      question: "Can I use multiple cryptocurrencies in my wallet?",
      answer:
        "Yes, our wallet supports a wide range of cryptocurrencies including Bitcoin, Ethereum, USDT, and more. You can manage multiple cryptocurrencies within the same wallet.",
    },
    {
      id: 4,
      question: "How can I add funds to my wallet?",
      answer:
        'To add funds to your wallet, navigate to the "Receive" section in your wallet dashboard. You will be provided with a unique wallet address where you can send your desired cryptocurrency.',
    },
    {
      id: 5,
      question: "Can I transfer funds from my wallet to another wallet?",
      answer:
        'Yes, you can transfer funds from your wallet to another wallet. Navigate to the "Send" section in your wallet dashboard, enter the recipient\'s wallet address and the amount you want to send, and confirm the transaction.',
    },
    {
      id: 6,
      question: "What happens if I forget my wallet password?",
      answer:
        'If you forget your wallet password, you can initiate the password recovery process. Follow the "Forgot Password" link on the login page, and you will be guided through the necessary steps to reset your password securely.',
    },
    {
      id: 7,
      question: "Are there any transaction fees?",
      answer:
        "Yes, there may be transaction fees associated with using our wallet services. These fees vary depending on the cryptocurrency network and current network congestion. We strive to provide transparent information about any applicable fees.",
    },
    {
      id: 8,
      question: "Is my personal information safe?",
      answer:
        "We prioritize the privacy and security of your personal information. We implement strict security measures and adhere to privacy best practices to keep your information safe. Your data will only be used for the intended purposes as outlined in our privacy policy.",
    },
    {
      id: 9,
      question: "Can I access my wallet from multiple devices?",
      answer:
        "Yes, you can access your wallet from multiple devices with internet connectivity. Simply log in to your account using your credentials, and your wallet will be accessible from any supported device.",
    },
    {
      id: 10,
      question: "What should I do if I encounter an issue with my wallet?",
      answer:
        "If you encounter any issues or need assistance with your wallet, please reach out to our support team. You can find our contact information on our website.",
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const handleAccordion = (id) => {
    if (id === expandedId) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <FAQContainer>
      <FAQTitle>FAQs</FAQTitle>
      {faqs.map((faq) => (
        <FAQItem key={faq.id} onClick={() => handleAccordion(faq.id)} expanded={expandedId === faq.id}>
          <Question>
            {faq.question}
            <div>{expandedId === faq.id ? <FaChevronUp /> : <FaChevronDown />}</div>
          </Question>
          {expandedId === faq.id && <Answer>{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default Faq;
