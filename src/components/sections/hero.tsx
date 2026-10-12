import type { SiteContent } from "@/content/types";
import { Accent, Eyebrow, Photo, TextLink } from "../ui";

/* Desktop positions are the original's 1536px layout expressed in vw. */

export function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section className="bg-canvas pb-14 lg:pt-10 lg:pb-[5.3vw]">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="relative order-2 mx-6 mt-12 aspect-[4/5] sm:mx-[8vw] md:aspect-[4/3] lg:order-none lg:m-0 lg:aspect-[525/600] lg:w-[34.5vw] lg:shrink-0">
          <Photo image={hero.image} sizes="(min-width: 1024px) 35vw, 100vw" eager />
        </div>

        <div className="flex flex-col justify-between px-6 pt-4 sm:px-[8vw] lg:ml-[8.3vw] lg:w-[44.6vw] lg:px-0 lg:pt-0 lg:pb-[1.25vw]">
          <Eyebrow className="max-w-md lg:max-w-[29.5vw]">{hero.eyebrow}</Eyebrow>
          <div className="mt-8 lg:mt-12">
            <h1 className="font-serif text-display font-light text-heading">
              <Accent text={hero.title} />
            </h1>
            <p className="mt-6 text-body lg:mt-[1.95vw]">{hero.text}</p>
            <TextLink link={hero.button} className="mt-7 lg:mt-[2vw]" />
          </div>
        </div>

        <div className="relative hidden lg:ml-auto lg:block lg:aspect-[123/396] lg:w-[8.1vw] lg:self-end">
          <Photo image={hero.sideImage} sizes="9vw" />
        </div>
      </div>
    </section>
  );
}
