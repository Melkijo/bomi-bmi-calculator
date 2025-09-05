import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  CircleDollarSign,
  Clock,
  Package,
  PackageX,
  Plane,
  ShieldPlus,
  Users,
  Waypoints
} from "lucide-react";

const faqs = [
  {
    question: "What is BMI?",
    answer:
      "BMI (Body Mass Index) is a number calculated from your height and weight to indicate if you are underweight, normal, overweight, or obese.",
    icon: Package
  },
  {
    question: "Does Bomi store my data?",
    answer:
      "No, all BMI results and history are stored only on your device.",
    icon: Clock
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes, Bomi lets you keep a history of your BMI records.",
    icon: Plane
  },
  {
    question: "Is the app free?",
    answer:
      "Yes, the core features are free to use.",
    icon: Waypoints
  }
];

const FAQ = () => {
  return (
    <div id="faq" className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground mt-5 text-center text-lg tracking-normal text-balance sm:text-2xl">
        Find answers to common questions about Bomi.
      </p>

      <div className="mx-auto mt-16 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={faq.question}
              className="bg-muted rounded-lg border-b-0 px-5"
            >
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <faq.icon className="mr-2.5 size-5" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-10 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
