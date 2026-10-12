import type { SiteContent } from "@/content/types";
import { Accent, TextLink } from "../ui";

export function Methods({ methods }: { methods: SiteContent["methods"] }) {
  return (
    <section id={methods.id} className="bg-surface px-6 pt-4 pb-20 sm:px-[8vw] lg:flex lg:px-0 lg:pt-[6.8vw] lg:pb-[7.8vw] lg:pl-[8.8vw]">
      <h2 className="font-serif text-subtitle font-light text-heading lg:w-[30.2vw] lg:pr-[4vw]">
        <Accent text={methods.title} />
      </h2>
      <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-x-10 lg:mt-[1.25vw] lg:w-[56vw] lg:gap-x-[4.55vw] lg:gap-y-[8.5vw]">
        {methods.items.map((item) => (
          <article key={item.title} id={item.id}>
            <h3 className="font-serif text-card font-light text-heading">{item.title}</h3>
            <p className="mt-4 text-body lg:mt-[1.95vw]">{item.text}</p>
            <TextLink link={item.link} className="mt-5 lg:mt-[1.8vw]" />
          </article>
        ))}
      </div>
    </section>
  );
}
