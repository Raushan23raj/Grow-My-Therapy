import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { Eyebrow } from "./ui";

export function SiteFooter({ brand, footer }: Pick<SiteContent, "brand" | "footer">) {
  const { columns, contact } = footer;

  return (
    <footer className="bg-surface">
      <div className="px-6 py-16 sm:px-[8vw] lg:flex lg:px-[5vw] lg:pt-[4.5vw] lg:pb-[9.5vw]">
        <div className="lg:w-[30vw]">
          <a href={brand.href} aria-label={`${brand.name}, home`} className="inline-block">
            {brand.logo ? (
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-auto w-72 lg:w-[25.7vw]"
              />
            ) : (
              <span className="block text-heading">
                <span className="block font-serif text-[2.6rem] leading-none font-light tracking-[-0.01em] lg:text-[3.3vw]">
                  {brand.name}
                </span>
                <span className="mt-3 block pl-1 text-[0.72rem] tracking-[0.4em] text-accent uppercase lg:text-[0.8rem]">
                  {brand.tagline}
                </span>
              </span>
            )}
          </a>
          <p className="mt-4 max-w-md text-body lg:ml-[1.8vw] lg:w-[26vw]">{footer.blurb}</p>
        </div>

        <div className="mt-12 grid gap-10 text-[0.95rem] leading-[1.8] sm:grid-cols-3 lg:mt-0 lg:ml-[7.8vw] lg:flex-1 lg:grid-cols-[15.1vw_18.9vw_1fr] lg:gap-0">
          {columns.map((column) => (
            <div key={column.title}>
              <Eyebrow>{column.title}</Eyebrow>
              <ul className="mt-[15px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-opacity hover:opacity-60">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <Eyebrow>{contact.title}</Eyebrow>
            <address className="mt-[15px] not-italic [overflow-wrap:anywhere]">
              {contact.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              {contact.links.map((link) => (
                <a key={link.href} href={link.href} className="block transition-opacity hover:opacity-60">
                  {link.label}
                </a>
              ))}
            </address>
            <p className="mt-[15px]">{contact.note}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 bg-primary px-6 py-2.5 text-[0.95rem] leading-[1.8] text-on-primary sm:px-[8vw] lg:flex-row lg:justify-between lg:px-[6.8vw] lg:py-[9px]">
        <p>
          {footer.legal.map((link) => (
            <span key={link.label}>
              <a href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </a>
              {" | "}
            </span>
          ))}
          {footer.credit}
        </p>
        {footer.crisisNote && <p>{footer.crisisNote}</p>}
      </div>
    </footer>
  );
}
