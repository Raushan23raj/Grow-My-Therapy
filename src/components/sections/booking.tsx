import type { SiteContent } from "@/content/types";
import { Accent, Eyebrow, Photo, PillLink } from "../ui";

export function Booking({ booking }: { booking: SiteContent["booking"] }) {
  return (
    <section id="contact" className="bg-canvas pt-20 lg:flex lg:pt-[6.7vw] lg:pb-[9.3vw]">
      <div className="relative hidden lg:block lg:aspect-[181/478] lg:w-[11.9vw] lg:shrink-0 lg:self-end">
        <Photo image={booking.sideImage} sizes="12vw" />
      </div>
      <div className="px-6 sm:px-[8vw] lg:ml-[8.3vw] lg:w-[37vw] lg:px-0">
        <Eyebrow>{booking.eyebrow}</Eyebrow>
        <h2 className="mt-8 font-serif text-title font-light text-heading lg:mt-[6.25vw]">
          <Accent text={booking.title} />
        </h2>
        <div className="mt-6 space-y-[15px] text-body lg:mt-[2.2vw]">
          {booking.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <PillLink link={booking.button} className="mt-7" />
      </div>
      <div className="relative mt-16 aspect-[4/5] sm:aspect-[16/10] lg:mt-0 lg:ml-auto lg:aspect-[525/600] lg:w-[34.5vw]">
        <Photo image={booking.image} sizes="(min-width: 1024px) 35vw, 100vw" />
      </div>
    </section>
  );
}
