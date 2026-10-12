import type { SiteContent } from "@/content/types";
import { Accent } from "../ui";

export function Faq({ faq }: { faq: NonNullable<SiteContent["faq"]> }) {
  return (
    <section id="faqs" className="bg-surface px-6 py-20 sm:px-[8vw] lg:flex lg:px-0 lg:pt-[7.5vw] lg:pb-[8vw] lg:pl-[8.8vw]">
      <h2 className="font-serif text-subtitle font-light text-heading lg:w-[26.4vw] lg:pr-[4vw]">
        <Accent text={faq.title} />
      </h2>
      <div className="mt-10 border-t border-line lg:mt-0 lg:w-[59.8vw]">
        {faq.items.map((item, i) => (
          <details key={item.question} name="faq" open={i === 0} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 transition-opacity hover:opacity-70 [&::-webkit-details-marker]:hidden">
              <h3 className="font-serif text-card font-light text-heading">{item.question}</h3>
              <span aria-hidden className="relative h-4 w-4 shrink-0">
                <span className="absolute top-1/2 left-0 h-px w-4 bg-current" />
                <span className="absolute top-1/2 left-0 h-px w-4 rotate-90 bg-current transition-transform duration-300 group-open:rotate-0" />
              </span>
            </summary>
            <p className="max-w-[46rem] pr-10 pb-7 text-body">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
