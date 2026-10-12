import type { SiteContent } from "@/content/types";
import { Accent, Eyebrow, Photo, TextLink } from "../ui";

type Office = NonNullable<SiteContent["office"]>;


export function OfficeSection({ office }: { office: Office }) {
  const [main, secondary] = office.images;

  return (
    <section id="office" aria-labelledby="office-title" className="bg-muted px-6 py-20 sm:px-[8vw] lg:px-0 lg:pt-[7.5vw] lg:pb-[8vw]">
      <div className="lg:flex lg:items-end lg:pr-[5vw] lg:pl-[8.8vw]">
        <div className="lg:w-[40vw]">
          <Eyebrow>{office.eyebrow}</Eyebrow>
          <h2 id="office-title" className="mt-6 font-serif text-title font-light text-heading lg:mt-[2.4vw]">
            <Accent text={office.title} />
          </h2>
          <div className="mt-6 space-y-4 text-body lg:mt-[2vw]">
            {office.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:ml-auto lg:w-[36vw]">
          <dl>
            {office.details.map((detail) => (
              <div key={detail.label} className="border-b border-line py-5 first:pt-0 sm:flex sm:gap-6">
                <dt className="w-32 shrink-0 pt-0.5 text-small font-normal tracking-[0.1em] uppercase">{detail.label}</dt>
                <dd className="mt-1 text-body sm:mt-0">{detail.value}</dd>
              </div>
            ))}
          </dl>
          <TextLink link={office.button} className="mt-7" />
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-[5.5vw] lg:grid-cols-2 lg:gap-6 lg:pr-[5vw] lg:pl-[8.8vw]">
        <div className="relative aspect-[4/3] overflow-hidden lg:w-full">
          <Photo image={main} sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden lg:w-full">
          <Photo image={secondary} sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
