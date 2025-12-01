'use client';

import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQTwoColumnProps {
  title?: string;
  titleLines?: string[];
  items: FAQItem[];
}

export default function FAQTwoColumn({ 
  title,
  titleLines,
  items 
}: FAQTwoColumnProps) {
  // Default title lines if titleLines not provided
  const defaultTitleLines = [
    'Preguntas Frecuentes',
    'sobre Reformas en Barcelona',
    'y Vallès Occidental'
  ];
  
  const displayTitleLines = titleLines || defaultTitleLines;
  // Create pairs: each row will have two items side by side
  const midpoint = Math.ceil(items.length / 2);
  const pairs: Array<[FAQItem | null, FAQItem | null]> = [];
  
  for (let i = 0; i < midpoint; i++) {
    pairs.push([
      items[i] || null,
      items[i + midpoint] || null
    ]);
  }

  const renderFAQItem = (item: FAQItem, key: number) => (
    <div key={key} className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary">
          <QuestionMarkCircleIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg text-brand-text-heading mb-3">
          {item.question}
        </h3>
        <p className="text-brand-text-body leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-16 text-center leading-tight">
          {displayTitleLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h2>
        
        <div className="space-y-8">
          {pairs.map((pair, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {pair[0] && renderFAQItem(pair[0], rowIndex * 2)}
              {pair[1] && renderFAQItem(pair[1], rowIndex * 2 + 1)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

