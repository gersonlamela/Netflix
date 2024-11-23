import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="w-full bg-black px-[50px] lg:px-[168px]">
      <h1 className="text-[48px] font-bold text-primary-white text-center mt-[72px] mb-[24px]">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full  text-primary-white gap-[8px] flex flex-col"
      >
        <AccordionItem
          value="item-1"
          className="bg-gray-900 px-[24px] text-[20px]"
        >
          <AccordionTrigger>What is Netflix?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-900 px-[24px] text-[20px]"
        >
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-900 px-[24px] text-[20px]"
        >
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
