import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/faq";

export function Faq() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="z-10 w-[80%] space-y-8 my-16">
        <div className="flex text-7xl font-semibold">FAQ</div>

        <Accordion type="single" collapsible>
          {FAQ.map((item) => (
            <AccordionItem value={item.question} key={item.question}>
              <AccordionTrigger className="text-left text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
