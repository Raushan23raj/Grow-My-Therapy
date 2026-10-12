import type { SiteContent } from "@/content/types";
import { Accent, Photo } from "../ui";

export function Audiences({ audiences }: { audiences: SiteContent["audiences"] }) {
  return (
    <section id={audiences.id} className="bg-surface px-6 py-20 sm:px-[8vw] lg:px-[5vw] lg:pt-[6.8vw] lg:pb-[7.5vw]">
      <h2 className="font-serif text-title font-light text-heading">
        <Accent text={audiences.title} />
      </h2>
      <div className="mt-10 grid gap-14 md:grid-cols-3 md:gap-6 lg:mt-[3.55vw] lg:ml-auto lg:w-[78.6vw] lg:gap-[1.3vw]">
        {audiences.items.map((item) => (
          <article key={item.title} id={item.id}>
            <div className="relative aspect-[385/437]">
              <Photo image={item.image} sizes="(min-width: 768px) 26vw, 100vw" />
            </div>
            <h3 className="mt-7 font-serif text-card font-light text-heading lg:mt-[3.4vw]">
              {item.href ? (
                <a href={item.href} className="transition-opacity hover:opacity-60">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            <p className="mt-4 text-body lg:mt-[1.95vw]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
