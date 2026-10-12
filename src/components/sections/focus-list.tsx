import type { SiteContent } from "@/content/types";
import { Accent } from "../ui";

export function FocusList({ focus }: { focus: SiteContent["focus"] }) {
  const half = Math.ceil(focus.items.length / 2);
  const columns = [focus.items.slice(0, half), focus.items.slice(half)];

  return (
    <section className="bg-surface px-6 py-20 sm:px-[8vw] lg:flex lg:px-0 lg:pt-[8vw] lg:pb-[10.9vw] lg:pl-[8.8vw]">
      <h2 className="font-serif text-subtitle font-light text-heading lg:w-[26.4vw] lg:pr-[4vw]">
        <Accent text={focus.title} />
      </h2>
      <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-8 lg:mt-0 lg:w-[59.8vw] lg:gap-x-[0.8vw]">
        {columns.map((column, i) => (
          <ul key={i}>
            {column.map((item) => (
              <li
                key={item.label}
                className="mb-[22px] border-b border-line pb-[22px] text-small font-normal tracking-[0.1em] uppercase lg:mb-[26px] lg:pb-[27px] sm:last:mb-0 sm:last:border-0 sm:last:pb-0"
              >
                {item.href ? (
                  <a href={item.href} className="transition-opacity hover:opacity-60">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
