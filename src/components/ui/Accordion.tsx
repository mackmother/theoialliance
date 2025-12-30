"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-white/[0.06] rounded-xl overflow-hidden bg-dark-900/60 transition-all duration-200 hover:border-white/[0.1]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="text-dark-100 font-medium pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-brand-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-5 text-dark-400 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
