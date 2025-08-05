import { useState } from 'react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Linkria?",
      answer: "Linkria is a single, smart link that brings together all your content from social media profiles and websites to videos, products, and more. It's the easiest way to share everything you do in one beautiful, customizable page, whether it's your latest YouTube video, a product drop, or your favorite playlists."
    },
    {
      question: "Is Linkria safe to use?",
      answer: "Yes, Linkria is completely safe to use. We prioritize your privacy and security with industry-standard encryption and data protection measures."
    },
    {
      question: "Do you have a free plan?",
      answer: "Yes, we offer a free plan that includes basic features to get you started. You can upgrade to our premium plans for additional features and customization options."
    },
    {
      question: "How much does Linkria cost?",
      answer: "Linkria offers various pricing tiers to suit different needs. Our free plan is available to everyone, and our premium plans start at competitive rates with additional features and customization options."
    },
    {
      question: "Can I use my own domain?",
      answer: "We're currently rolling out custom domains to a select group of users. If you're interested in trying it out, please reach out to us."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-black">{faq.question}</h3>
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className={`text-gray-400 text-xl transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
                </div>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-gray-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};