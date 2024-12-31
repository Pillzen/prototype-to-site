import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why doesn't it work with raw HTML?",
    answer: "Our model is specifically trained on React components and modern web development practices. Raw HTML wouldn't benefit from our optimized processing pipeline."
  },
  {
    question: "Why are there random unrelated images?",
    answer: "The images are carefully selected examples that demonstrate various UI patterns and design possibilities. They help inspire and guide the development process."
  },
  {
    question: "Where can I find DeepSeek V3?",
    answer: "DeepSeek V3 is currently in development. Stay tuned for updates and announcements about its release."
  }
];

export const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-secondary rounded-lg px-6">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};